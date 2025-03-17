function ProductStatus(props) {
    const down = "product-status product-status-down";
    const up = "product-status product-status-up";
    return (
        <div className={props.hover ? up : down}>
            <p>{props.type}</p>
        </div>
    );
}

export default ProductStatus;
