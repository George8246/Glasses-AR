import glasses from "../../../DataArray/glasses";
import Info from "./Info";
import "../../Styles/ViewProductBody.css";
import SimilarProducts from "./SimilarProducts";
import VProduct from "./VProduct";
import SideDiv from "../../BasicComponents/Genral/SideDiv";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

function ViewProductsBody(props) {
    var oneGlasses = [];

    const [glassesDet, setGlassesDet] = useState({});
    const [imagePath, setImagePath] = useState([]);

    async function getData() {
        const id = props.id.toString();
        console.log(id);
        try {
            await axios.post("getProducts", { status: id }).then(function (response) {
                oneGlasses = response.data;

                console.log(oneGlasses);
                setGlassesDet(oneGlasses);

                setImagePath(glassesDet[0].colors[0].src.map((item) => require("../../../Images/glasses/Front/" + item)));
                // Don't forget to return something
                return;
            });
        } catch (err) {
            console.error(err);
        }
    }
    getData();

    return (
        <div className="productBody">
            <SideDiv classes="float-l all-flex space-between container-div products-body-div">
                {imagePath.map((item, index) => (
                    <VProduct key={index} src={item} />
                ))}
            </SideDiv>
            <SideDiv classes="slide-info-div">
                <Info array={glassesDet[0]} />
                <SimilarProducts id={glassesDet[0]._id} title="Similar Glasses" img={imagePath[0]} />
                <SimilarProducts id={glassesDet[0]._id} title="Top Selling" img={imagePath[0]} />
            </SideDiv>
        </div>
    );
}

export default ViewProductsBody;
