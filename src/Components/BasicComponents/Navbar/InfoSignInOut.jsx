import Box from "@mui/material/Box";
import Button from "../Genral/button";
import { Link } from "react-router-dom";

function InfoSignInOut(props) {
    const classes = props.change ? "btn outlined white-btn" : "btn outlined";

    return (
        <Box sx={{ "& button": { m: 1 } }}>
            {props.SignUp && (
                <Link to="/sign-in">
                    <Button classes={classes}>Sign In</Button>
                </Link>
            )}
            {props.SignIn && (
                <Link to="/sign-up">
                    <Button classes={classes}>Sign Up</Button>
                </Link>
            )}
        </Box>
    );
}

export default InfoSignInOut;
