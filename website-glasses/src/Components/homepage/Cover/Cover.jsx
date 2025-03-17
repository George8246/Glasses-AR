import "../../Styles/Cover.css";
import Box from "@mui/material/Box";
import axios from "axios";
import { Link } from "react-router-dom";
import glasses from "../../../DataArray/glasses";
import glasses2 from "../../../DataArray/glasses2";

function MainCover() {
    function addOneGlasses() {
        axios
            .post("addGlasses", glasses)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function addAllGlasses() {
        axios
            .post("addGlasses", glasses2)
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
                    <button onClick={addOneGlasses} className="btn outlined">
                        Add One Glasses{/*Try It*/}
                    </button>
                    <button onClick={addAllGlasses} className="btn outlined">
                        Add All Glasses{/*Try It*/}
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
