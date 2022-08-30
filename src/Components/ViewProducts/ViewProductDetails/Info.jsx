function Info(props) {
    var details = props.name;

    return (
        <div className="right-small-div Info">
            <h2>{props.array.name}</h2>
            <h5>{details}</h5>
            <div className="price">
                <p style={{ fontSize: "30px" }}>{props.array.price}</p>
                <p className="sale">{props.oldPrice}</p>
            </div>
            <div className="colors">
                {props.array.colors.map((item, index) => (
                    <div key={index} id={index} onClick={props.ChangeColor} className="color-div">
                        <div key={index} id={index} className="color" style={{ backgroundColor: item.colorPallet }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
