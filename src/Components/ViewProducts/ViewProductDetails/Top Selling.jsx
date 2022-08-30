import { Link } from "react-router-dom";

function SimilarProducts(props) {
    return (
        <div className="right-small-div">
            <h1>{props.title}</h1>
            <div className="similar-glasses">
                <Link to={{ pathname: "/view-product", state: { id: props.id } }}><img src={props.img} alt="" /></Link>
                <Link to={{ pathname: "/view-product", state: { id: props.id } }}><img src={props.img} alt="" /></Link>    
                <Link to={{ pathname: "/view-product", state: { id: props.id } }}><img src={props.img} alt="" /></Link>
                <Link to={{ pathname: "/view-product", state: { id: props.id } }}><img src={props.img} alt="" /></Link>
            </div>
        </div>
    );
}

export default SimilarProducts;
