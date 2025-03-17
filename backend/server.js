//jshint esversion:6
const cookieParser = require("cookie-parser");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const app = express(); //Line 2
const port = 5000; //Line 3

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
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
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/GlassesWithAR_DB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String,
    password: String,
    phone: String,
    gender: String,
    address: String,
});

const glassesSchema = new mongoose.Schema({
    name: String,
    logoImg: String,
    productType: String,
    status: String,
    colorTypes: String,
    colors: [
        {
            color: String,
            templeColor: [String],
            colorTypes: String,
            name: String,
            src: [String],
            objectSrc: String,
            status: String,
            availableItems: String,
        },
    ],
    price: Number,
    frameShape: String,
    frameSize: String,
    frameType: String,
    modelNo: String,
    salePercent: Number,
    frameWidth: String,
    frameDimensions: String,
    weight: String,
    weightGroup: String,
    material: String,
    frameStyle: String,
    salePrice: String,
    gender: String,
    height: String,
    totalAvailableItems: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);
const Glasses = new mongoose.model("Glasses", glassesSchema);

passport.use(User.createStrategy());

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    return done(null, user.id);
    // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        return done(err, user);
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

    bcrypt.hash(password, saltRounds, function (err, hash) {
        const data = {
            username: email,
            email: email,
            password: hash,
            name: name,
            country: country,
            address: address,
            phone: phone,
            gender: gender,
        };
        const newUser = new User(data);
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                passport.authenticate("http://localhost:3000")(req, res, function () {
                    // Successful authentication, redirect home.
                    console.log("autho");
                    res.cookie("Candinal.idno", data.email, {
                        maxAge: 2 * 60 * 60 * 1000,
                        httpOnly: true,
                    });
                    res.cookie("Cam.Nas", data.name, {
                        maxAge: 2 * 60 * 60 * 1000,
                        httpOnly: true,
                    });
                    res.send("signup");
                });
            }
        });
    });
});

app.post("/getProducts", function (req, res) {
    const { status, type } = req.body;

    switch (status) {
        case "all":
            Glasses.find(function (err, foundGlasses) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(foundGlasses);
                }
            });
            break;
        case "new":
        case "sale":
        case "top":
            Glasses.find({ status: status }, function (err, foundGlasses) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(foundGlasses);
                }
            });
            break;

        case "Aviator":
        case "Cat Eye":
        case "Club Master":
        case "Geometric":
        case "Hexagon":
        case "Rectangle":
        case "Round":
        case "Square":
        case "Wayfarer":
            Glasses.find({ frameShape: status, type: type }, function (err, foundGlasses) {
                if (err) {
                    console.log(err);
                    res.send([]);
                } else {
                    res.send(foundGlasses);
                }
            });
            break;

        default:
            Glasses.find({ _id: status }, function (err, foundGlasses) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(foundGlasses);
                }
            });
            break;
    }
});

app.post("/addGlasses", function (req, res) {
    for (let i = 0; i < req.body.length; i++) {
        const g = req.body[i];
        const {
            name,
            logoImg,
            type,
            status,
            colorTypes,
            colors,
            price,
            gender,
            frameShape,
            size,
            frameSize,
            frameType,
            modelNo,
            frameWidth,
            frameDimensions,
            weight,
            weightGroup,
            material,
            frameStyle,
            height,
            salePercent
        } = g;
        var totalAvailableItems = 0;
        for (let i = 0; i < colors.length; i++) {
            const availableItems = colors[i].availableItems;
            totalAvailableItems += availableItems;
        }

        const salePrice = (price * (1 - salePercent / 100)).toFixed(2);

        const data = {
            name: name,
            logoImg: logoImg,
            type: type,
            status: status,
            colorTypes: colorTypes,
            price: price,
            gender: gender,
            frameShape: frameShape,
            size: size,
            colors: colors,
            totalAvailableItems: totalAvailableItems,
            frameSize: frameSize,
            frameType: frameType,
            modelNo: modelNo,
            frameWidth: frameWidth,
            frameDimensions: frameDimensions,
            weight: weight,
            weightGroup: weightGroup,
            material: material,
            frameStyle: frameStyle,
            salePrice: salePrice,
            height: height,
            salePercent: salePercent,
        };

        const glasses = new Glasses(data);
        glasses.save(function (err) {
            if (err) {
                console.log(err);
            }
        });
    }
});

app.post("/isLogged", function (req, res) {
    if (req.cookies["Candinal.idno"] !== undefined && req.cookies["Candinal.idno"] !== null) {
        res.send({ log: true, name: req.cookies["Cam.Nas"] });
    } else {
        res.send({ log: false });
    }
});

app.post("/login", function (req, res, next) {
    const user = new User({
        username: req.body.email,
        password: req.body.password,
    });

    User.findOne(({ username: req.body.email }, res, req), function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundUser);
            bcrypt.compare(user.password, foundUser.password, function (err, result) {
                if (result) {
                    console.log(foundUser);
                    passport.authenticate("local", function (err, user, info) {
                        console.log("login");
                        res.cookie("Candinal.idno", foundUser.email, {
                            maxAge: 2 * 60 * 60 * 1000,
                            httpOnly: true,
                        });
                        res.cookie("Cam.Nas", foundUser.name, {
                            maxAge: 2 * 60 * 60 * 1000,
                            httpOnly: true,
                        });
                        res.send({ email: req.body.email });
                    })(req, res, next);
                }
            });
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
