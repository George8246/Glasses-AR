/* eslint-disable */
import axios from "axios";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

function SimilarProducts(props) {
    const [similarGlasses, setsimilarGlasses] = useState([]);
    const [imagePath, setImagePath] = useState([]);

    var getting = {};

    switch (props.title) {
        case "Similar Glasses":
            getting = { status: props.array.frameShape, type: props.array.type };
            break;
        case "Similar Colors":
            getting = { color: props.array.colors[0] };
            break;
        case "Similar Size":
            getting = { frameWidth: props.array.frameWidth[0], frameSize: props.array.frameSize[0] };
            break;
        case "Top Selling":
            getting = { status: "top" };
            break;
    }

    // frameShape
    // frameSize
    // frameType
    // frameStyle

    useLayoutEffect(() => {
        axios
            .post("getProducts", getting)
            .then(async function (response) {
                const g = response.data;
                console.log(g);
                setsimilarGlasses(response.data);

                setImagePath(g.map((item) => require("../../../Images/glasses/Glasses/" + item.colors[0].src[0])));
                setTimeout(() => {
                    console.log(similarGlasses);
                    if (similarGlasses.length > 4) {
                        var temp = [];
                        for (let i = 0; i < 4; i++) {
                            const element = similarGlasses[i];
                            temp.push(element);
                        }
                        setsimilarGlasses(temp);
                    }
                }, 2000);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="right-small-div">
            <h1>{props.title}</h1>
            {similarGlasses < 4 ? (
                similarGlasses.map((item, index) => {
                    return (
                        <div className="similar-glasses">
                            <Link onClick={refreshPage} key={index} to={"/view-product?glasses=" + item._id}>
                                <img key={item._id} src={imagePath[index]} alt="" />
                            </Link>
                        </div>
                    );
                })
            ) : (
                <div className="similar-glasses">
                    <Link onClick={refreshPage} key={0} to={"/view-product?glasses=" + similarGlasses._id}>
                        <img key={similarGlasses._id} src={imagePath[0]} alt="" />
                    </Link>
                    <Link onClick={refreshPage} key={1} to={"/view-product?glasses=" + similarGlasses._id}>
                        <img key={similarGlasses._id} src={imagePath[1]} alt="" />
                    </Link>
                    <Link onClick={refreshPage} key={2} to={"/view-product?glasses=" + similarGlasses._id}>
                        <img key={similarGlasses._id} src={imagePath[2]} alt="" />
                    </Link>
                    <Link onClick={refreshPage} key={3} to={"/view-product?glasses=" + similarGlasses._id}>
                        <img key={similarGlasses._id} src={imagePath[3]} alt="" />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default SimilarProducts;
