/* eslint-disable */
import Products from "../../BasicComponents/Genral/Product";
import { useLocation } from "react-router-dom";
import SideDiv from "../../BasicComponents/Genral/SideDiv";
import "../../Styles/ViewProductBody.css";
import RangeInput from "./RangeInput";
import Frame from "./Frame";
import ColorType from "./ColorType";
import FramesType from "../../../DataArray/FramesType";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

function ViewProduts(props) {
    const search = useLocation().search;
    const type = new URLSearchParams(search).get("type");

    var glasses;
    const [newGlasses, setNewGlasses] = useState([]);
    var isGender = false;
    var containSunAndEye = false;
    useLayoutEffect(() => {
        axios
            .post("getProducts", { status: "all" })
            .then(function (response) {
                glasses = response.data;
                glasses.sort(() => Math.random() - 0.5);

                switch (type) {
                    case "all":
                        setNewGlasses(glasses);
                        break;
                    case "male":
                        setNewGlasses(glasses.filter((item) => item.gender === type || item.gender === "both"));
                        isGender = true;
                        break;
                    case "female":
                        setNewGlasses(glasses.filter((item) => item.gender === type || item.gender === "both"));
                        isGender = true;
                        break;
                    case "kids":
                        setNewGlasses(glasses.filter((item) => item.gender === type));
                        isGender = true;
                        break;
                    default:
                        setNewGlasses(glasses.filter((item) => item.status === type));
                        break;
                }

                // newGlasses.sort(() => Math.random() - 0.5);

                var s = false;
                var e = false;

                for (let index = 0; index < newGlasses.length; index++) {
                    const t = newGlasses[index].type;
                    if (t === "sunglasses") {
                        s = true;
                    }
                    if (t === "eyeglasses") {
                        e = true;
                    }
                    if (s && e) {
                        containSunAndEye = true;
                        break;
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    /*
    price
    frame type
    frame shape
    color
    brands
    gender
    color type
    product type
    */

    return (
        <div>
            {newGlasses.length !== 0 && (
                <SideDiv classes="display-flex">
                    <SideDiv classes="filter container-div ml-0 pm-30">
                        <RangeInput />
                        {containSunAndEye && <Frame header="Product Type" array={newGlasses} type="type" />}
                        <Frame header="Frame Type" array={FramesType} />
                        <Frame header="Frame Shape" array={newGlasses} type="shape" />
                        <Frame header="Frame Color" array={newGlasses} type="colors" />
                        <Frame header="Brands" array={newGlasses} type="Logo" />
                        {!isGender && <Frame header="Gender" type="Gender" />}
                        <ColorType array={newGlasses} />
                    </SideDiv>

                    <SideDiv classes="products-body-div display-product-div container-div pm-30 row space-around">
                        {newGlasses.map((item) => (
                            <Products
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                src={require("../../../Images/glasses/Glasses/" + item.colors[0].src[0])}
                                img="img-big"
                                classes="col-lg-4 col-md-6 col-sm-12 Big-card three-products-in-row"
                            />
                        ))}
                    </SideDiv>
                </SideDiv>
            )}
        </div>
    );
}

export default ViewProduts;
