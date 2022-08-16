import { useState } from "react";
import "./GenralStyles.css";
import ProductStatus from "./ProductStatus";

function Product(props) {
    const classes = props.best ? props.classes + " product-card Product-padding overFlow-hidden" : props.classes + " product-card Product-padding";

    const [hover, sethover] = useState(false);

    const typeExit = props.type !== undefined;

    function Enter() {
        sethover(true);
    }
    function Leave() {
        sethover(false);
    }

    return (
        <div className={classes} style={hover ? { zIndex: "3" } : { zIndex: "1" }} onMouseEnter={Enter} onMouseLeave={Leave}>
            {props.best && <div className="best" style={hover ? { backgroundColor: "#2e4e78" } : { backgroundColor: "rgb(226, 226, 226)" }}></div>}
            {typeExit && <ProductStatus hover={hover} type={props.type.toUpperCase()} />}
            <img className={props.img} src={require("../../../Images/glasses/john-jacobs-G_5303.png")} alt="Front Glasses" />
            <div style={props.styles}>
                <h4>Ray Ben</h4>
                <p>$359.00</p>
            </div>
        </div>
    );
}

export default Product;
