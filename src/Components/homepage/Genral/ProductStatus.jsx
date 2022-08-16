function ProductStatus(props) {
    const zero = { top: "-20px", backgroundColor: "#2e4e78", color: "#fff", boxShadow: "0px -40px 50px #6f90b6" };
    const notZero = { top: "20px", backgroundColor: "#fff", color: "#2e4e78" };
    return (
        <div className="product-status" style={props.hover ? zero : notZero}>
            <p>{props.type}</p>
        </div>
    );
}

export default ProductStatus;
