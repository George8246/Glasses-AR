import Box from "@mui/material/Box";
import Button from "../Genral/button";

function InfoSignInOut(props) {
    const classes = props.change ? "btn outlined white-btn" : "btn outlined";

    return (
        <Box sx={{ "& button": { m: 1 } }}>
            <Button classes={classes}>Sign IN</Button>
            <Button classes={classes}>Sign Up</Button>
        </Box>
    );
}

export default InfoSignInOut;
