/* eslint-disable */
import axios from "axios";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

function SimilarProducts(props) {
    const [similarGlasses, setsimilarGlasses] = useState([]);
    const [imagePath, setImagePath] = useState([]);

    useLayoutEffect(() => {
        axios
            .post("getProducts", { status: props.array.frameShape, type: props.array.type })
            .then(async function (response) {
                // console.log(response);
                const g = response.data;
                setsimilarGlasses(response.data);
                if (similarGlasses.length > 4) {
                    var temp = [];
                    for (let i = 0; i < 4; i++) {
                        const element = similarGlasses[i];
                        temp.push(element);
                    }
                    setsimilarGlasses(temp);
                }
                setImagePath(g[0].colors[0].src.map((item) => require("../../../Images/glasses/Front/" + item)));
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
            <div className="similar-glasses">
                {similarGlasses.map((item, index) => {
                    return (
                        <Link onClick={refreshPage} key={index} to={"/view-product?glasses=" + item._id}>
                            <img key={item._id} src={imagePath[0]} alt="" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default SimilarProducts;
