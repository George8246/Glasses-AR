/* eslint-disable */
import Info from "./Info";
import "../../Styles/ViewProductBody.css";
import SimilarProducts from "./SimilarProducts";
import VProduct from "./VProduct";
import SideDiv from "../../BasicComponents/Genral/SideDiv";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

function ViewProductsBody(props) {
    var oneGlasses = [];

    const [glassesDet, setGlassesDet] = useState([]);
    const [imagePath, setImagePath] = useState([]);
    const [index, setIndex] = useState(0);

    useLayoutEffect(() => {
        axios
            .post("getProducts", { status: props.id })
            .then(async function (response) {
                oneGlasses = response.data;
                setGlassesDet(response.data);

                setImagePath(oneGlasses[0].colors[0].src.map((item) => require("../../../Images/glasses/Glasses/" + item)));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    function ChangeColor(event) {
        const { id } = event.target;
        setIndex(id);
        setImagePath(glassesDet[0].colors[id].src.map((item) => require("../../../Images/glasses/Glasses/" + item)));
    }

    return (
        <div className="productBody">
            <SideDiv classes="float-l all-flex space-between container-div products-body-div">
                {imagePath.map((item, index) => (
                    <VProduct key={index} index={index} src={item} />
                ))}
            </SideDiv>
            {imagePath.length !== 0 && (
                <SideDiv classes="slide-info-div">
                    <Info ChangeColor={ChangeColor} array={glassesDet[0]} index={index} />
                    <SimilarProducts array={glassesDet[0]} k={"SG"} title="Similar Glasses" img={imagePath[0]} />
                    <SimilarProducts array={glassesDet[0]} k={"SC"} title="Similar Colors" img={imagePath[0]} />
                    <SimilarProducts array={glassesDet[0]} k={"SS"} title="Similar Size" img={imagePath[0]} />
                    <SimilarProducts array={glassesDet[0]} k={"T"} title="Top Selling" img={imagePath[0]} />
                </SideDiv>
            )}
        </div>
    );
}

export default ViewProductsBody;
