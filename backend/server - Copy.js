//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const cors = require("cors");

const app = express(); //Line 2
const port = 5000; //Line 3

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(
    session({
        //Usuage
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String,
    password: String,
    phone: String,
    gender: String,
    address: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    done(null, user.id);
    // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

app.post("/SignUp", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var country = req.body.country;
    var address = req.body.address;
    var phone = req.body.phone;
    var gender = req.body.gender;

    const data = { username: email, email: email, name: name, country: country, address: address, phone: phone, gender: gender };

    User.register(data, password, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("http://localhost:3000")(req, res, function () {
                // Successful authentication, redirect home.
                console.log("autho");
                res.send("signup");
            });
        }
    });
});

app.post("/isLogged", function (req, res) {
    if (req.isAuthenticated()) {
        console.log("Yes");
        res.send(true);
    } else {
        console.log("No");
        res.send(false);
    }
});

app.post("/login", function (req, res, next) {
    const user = new User({
        username: req.body.email,
        password: req.body.password,
    });

    req.logIn(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local", function (err, user, info) {
                console.log(user);
                console.log("login");
                res.send({ email: req.body.email });
            })(req, res, next);
        }
    });
});

// // create a GET route
// app.get("/", (req, res) => {
//     console.log("in root");
//     if (req.isAuthenticated()) {
//         //req.isAuthenticated() will return true if user is logged in
//         console.log("next()");
//         res.render("index"); //Line 10
//         next();
//     } else {
//         console.log("login");
//         res.redirect("/login"); //Line 10
//     }
// }); //

// create a GET route
app.get("/express_backend", (req, res) => {
    //Line 9
    res.send("hello"); //Line 10
}); //

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
