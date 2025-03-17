function Info(props) {
    const salePrice = props.array.status === "sale" ? props.array.price : props.array.salePrice;
    const price = props.array.status === "sale" ? props.array.salePrice : props.array.price;

    return (
        <div className="right-small-div Info">
            <h2>{props.array.name}</h2>
            <h5>{props.array.colors[props.index].name}</h5>
            <div className="price">
                <p style={{ fontSize: "30px" }}>{"$" + price}</p>
                {props.array.status === "sale" && <p className="sale">{"$" + salePrice}</p>}
            </div>
            <div className="colors">
                {props.array.colors.map((item, index) => (
                    <div
                        key={index}
                        id={index}
                        onClick={props.ChangeColor}
                        style={
                            parseInt(props.index) === index
                                ? {
                                      border: `1px double ${item.colorPallet}`,
                                      opacity: "1",
                                      boxShadow: `none`,
                                  }
                                : {}
                        }
                        className="color-div"
                    >
                        <div key={index} id={index} className="color" style={{ backgroundColor: item.color }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
