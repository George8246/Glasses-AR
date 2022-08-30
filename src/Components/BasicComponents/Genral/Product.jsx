import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/GenralStyles.css";
import ProductStatus from "./ProductStatus";

function Product(props) {
    var classes =
        props.best || props.top
            ? props.classes + " product-card Product-padding overFlow-hidden"
            : props.classes + " product-card Product-padding";

    const [hover, sethover] = useState(false);

    const typeExit = props.type !== undefined;

    classes = typeExit ? classes + " gery" : classes;
    const isOnSale = props.type === "sale";

    function Enter() {
        sethover(true);
    }

    function Leave() {
        sethover(false);
    }

    return (
        <div className={classes} style={hover ? { zIndex: "3" } : { zIndex: "1" }} onMouseEnter={Enter} onMouseLeave={Leave}>
            <Link to={"/view-product?glasses=" + props.id}>
                <div className={props.img}>
                    <img src={props.src} alt="Front Glasses" />
                </div>
                <div style={props.styles}>
                    <h5>{props.name}</h5>
                    <p>
                        {props.price}
                        {isOnSale && (
                            <span style={hover ? { color: "#2e4e78" } : { color: "rgb(92, 92, 92)" }} className="onSale">
                                {props.oldPrice}
                            </span>
                        )}
                    </p>
                </div>

                {/* background in the top seliing */}
                {props.best && (
                    <div
                        className="best"
                        style={hover ? { backgroundColor: "#6f90b6" } : { backgroundColor: "rgb(226, 226, 226)" }}
                    ></div>
                )}
                {/* {props.top && <div className="top" style={hover ? { backgroundColor: "#6f90b6" } : { backgroundColor: "rgb(226, 226, 226)" }}></div>} */}

                {/* ProductStatus */}
                {typeExit && <ProductStatus hover={hover} type={props.type.toUpperCase()} />}
            </Link>
        </div>
    );
}

export default Product;
