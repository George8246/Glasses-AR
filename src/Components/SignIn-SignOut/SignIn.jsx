import * as React from "react";
import Navbar from "../BasicComponents/Navbar/Navbar";
import "../Styles/Sign.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Footer from "../BasicComponents/Footer/Footer";
import axios from "axios";

function SignIn() {
    const [values, setValues] = React.useState({
        password: "",
        confirmPassword: "",
        showPassword: false,
    });

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function handleSubmit(event) {
        event.preventDefault();
        var email = document.querySelector("form input[name='email']").value;
        var pass = document.querySelector("form input[name='password']").value;


        const data = JSON.parse(`{"email":"${email}", "password":"${pass}"}`);

        axios
            .post("login", data, { withCredentials: true })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="happy-background">
                <div className="float-r container-div form">
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                        <div className="display-flex space-between headers" style={{ marginBottom: "50px" }}>
                            <h1>
                                <span>
                                    Sign In
                                    <hr className="red-thick-line" style={{ top: "50%", zIndex: 2 }} />
                                </span>
                            </h1>
                        </div>
                    </Box>
                    <form onSubmit={handleSubmit} className="sign-div">
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <TextField name="email" required type="email" label="Email" />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" required>
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    required
                                    type={values.showPassword ? "text" : "password"}
                                    value={values.password}
                                    onChange={handlePasswordChange("password")}
                                    endAdornment={
                                        <InputAdornment id="show-login-pass" position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    name="password"
                                    label="Password"
                                />
                            </FormControl>
                        </Box>
                        
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <Link to={"sign-up"}>Create New Account</Link>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <button className="btn btn-lg sign-btn">Log In</button>
                        </Box>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignIn;
