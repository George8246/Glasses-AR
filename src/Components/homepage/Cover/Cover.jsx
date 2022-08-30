import "../../Styles/Cover.css";
import Box from "@mui/material/Box";
import axios from "axios";
import { Link } from "react-router-dom";
import glasses from "../../../DataArray/glasses";

function MainCover() {
    function addGlasses() {
        axios
            .post("addGlasses", glasses)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section className="container-fluid cover">
            <img src={require("../../../Images/Cover.png")} alt="" />
            <div className="FloatingDataCover">
                <h1>Glasses With AR</h1>
                <p>
                    Choose the glasses You Like <br /> Try it, Own it
                </p>

                <Box sx={{ "& button": { m: 1 } }}>
                    <button onClick={addGlasses} className="btn outlined">
                        Add Glasses{/*Try It*/}
                    </button>
                    <Link to="/display-products?type=all">
                        <button className="btn outlined">Browse</button>
                    </Link>
                </Box>
            </div>
        </section>
    );
}

export default MainCover;
