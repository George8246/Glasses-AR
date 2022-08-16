import Box from "@mui/material/Box";
import Button from "../Genral/button";

function FloatingDataCover() {
    return (
        <div className="FloatingDataCover">
            <h1>Glasses With AR</h1>
            <p>
                Choose the glasses You Like <br /> Try it, Own it
            </p>

            <Box sx={{ "& button": { m: 1 } }}>
                <Button classes="btn outlined">Try It</Button>
                <Button classes="btn outlined">Browse</Button>
            </Box>
        </div>
    );
}

export default FloatingDataCover;
