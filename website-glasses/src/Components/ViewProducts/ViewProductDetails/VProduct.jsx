import { useState } from "react";

function VProduct(props) {
    const classes = props.index > 4 ? "product-img backgound-100" : "product-img";

    const [hover, setHover] = useState(false);

    function In() {
        setHover(true);
    }

    function out() {
        setHover(false);
    }

    return <div onMouseEnter={In} onMouseLeave={out} className={classes} style={{ backgroundImage: `url(${props.src})` }} />;
}
export default VProduct;
