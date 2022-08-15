import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function InfoSignInOut() {
    return (
        <Box sx={{ "& button": { m: 1 } }}>
            <Button variant="contained" size="medium">
                Sign In
            </Button>
            <Button variant="contained" size="medium">
                Sign Up
            </Button>
        </Box>
    );
}

export default InfoSignInOut;
