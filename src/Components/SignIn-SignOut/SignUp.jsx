import * as React from "react";
import Navbar from "../BasicComponents/Navbar/Navbar";
import "../Styles/Sign.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import countries from "../../DataArray/countries";
import Autocomplete from "@mui/material/Autocomplete";
import Footer from "../BasicComponents/Footer/Footer";
import axios from "axios";

function SignUp() {
    const [Gender, setGender] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

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

        var FName = document.querySelector("form input[name='FName']").value;
        var LName = document.querySelector("form input[name='LName']").value;
        var email = document.querySelector("form input[name='email']").value;
        var pass = document.querySelector("form input[name='password']").value;
        var confPass = document.querySelector("form input[name='confirm-password']").value;
        var country = document.querySelector("form input[name='country']").value;
        var address = document.querySelector("form input[name='address']").value;
        var phone = document.querySelector("form input[name='phone']").value;
        var gender = document.querySelector("form input[name='gender']").value;

        const data = JSON.parse(`{"name":"${FName} ${LName}", "email":"${email}", "password":"${pass}", "country":"${country}", "address":"${address}", "phone":"${phone}","gender":"${gender}"}`);

        axios
            .post("SignUp", data, { withCredentials: true })
            .then(function (response) {
                setName(response.data.name);
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
                            <span>
                                <h1>Sign Up</h1>
                                <hr className="red-thick-line" style={{ top: "35%", zIndex: 2 }} />
                            </span>
                        </div>
                        <Link to={"sign-in"}>Already have an account</Link>
                    </Box>

                    <form onSubmit={handleSubmit} className="sign-div">
                        {/************************************ Name ************************************/}
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <TextField name="FName" required type="text" label="First Name" />
                            <TextField name="LName" required type="text" label="Last Name" />
                        </Box>

                        {/************************************ Mail ************************************/}
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <TextField name="email" required type="email" label="Email" />
                        </Box>

                        {/************************************ Password ************************************/}
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
                                        <InputAdornment id="show-pass" position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    name="password"
                                    label="Password"
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" required>
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    required
                                    type={values.showPassword ? "text" : "password"}
                                    value={values.confirmPassword}
                                    onChange={handlePasswordChange("confirmPassword")}
                                    endAdornment={
                                        <InputAdornment id="show-pass" position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    name="confirm-password"
                                    label="Confirm Password"
                                />
                            </FormControl>
                        </Box>

                        {/************************************ Country ************************************/}
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <Autocomplete
                                id="country-select-demo"
                                options={countries}
                                autoHighlight
                                getOptionLabel={(option) => `${option.phone} ${option.label}`}
                                renderOption={(props, option) => (
                                    <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                                        <img loading="lazy" width="20" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`} alt="" />
                                        {option.label} ({option.code}) +{option.phone}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        required
                                        name="country"
                                        {...params}
                                        label="Choose a country"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: "new-password", // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                        </Box>

                        {/************************************ Phone Gender ************************************/}
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <TextField name="phone" required type="text" label="Phone Number" />
                            <FormControl sx={{ display: "flex", "& > :not(style)": { m: 1 } }}>
                                <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
                                <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" name="gender" open={open} onClose={handleClose} onOpen={handleOpen} value={Gender} label="Gender" onChange={handleGenderChange}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {/************************************ Address ************************************/}
                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <TextField helperText="Please enter your address included with number of the building" name="address" type="text" label="Address" />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
                            <button className="btn btn-lg sign-btn">Sign Up</button>
                        </Box>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
