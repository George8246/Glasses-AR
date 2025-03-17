function Frame(props) {
    var src;
    var isColor = false;
    var array = props.array;
    var temp = [];
    if (props.type === "colors") {
        isColor = true;
        var tempColor = [];
        var tempName = [];
        for (let index = 0; index < array.length; index++) {
            const element = array[index].colors;
            for (let i = 0; i < element.length; i++) {
                const color = element[i].colorPallet;
                const colorName = element[i].colorName;
                if (!tempColor.includes(color) && !tempName.includes(colorName)) {
                    tempName.push(colorName);
                    tempColor.push(color);
                }
            }
        }
        for (let k = 0; k < tempColor.length; k++) {
            const elementColor = tempColor[k];
            const elementName = tempName[k];
            temp.push({ color: elementColor, colorName: elementName });
        }
        array = temp;
    } else if (props.type === "Gender") {
        array = [
            { name: "male", src: require("../../../Images/glasses/frames/faces/male.png") },
            { name: "female", src: require("../../../Images/glasses/frames/faces/female.png") },
        ];
        src = array.map((item) => item.src);
    } else if (props.type === "type") {
        array = [
            { name: "eyeglasses", src: require("../../../Images/glasses/frames/glasses-types/eyeglasses.png") },
            { name: "sunglasses", src: require("../../../Images/glasses/frames/glasses-types/sunglasses.png") },
        ];
        src = array.map((item) => item.src);
    } else if (props.type === "Logo") {
        for (let i = 0; i < array.length; i++) {
            const Logo = array[i].logoImg;
            if (!temp.includes(Logo)) {
                temp.push(Logo);
            }
        }
        src = temp.map((item) => require("../../../Images/glasses/frames/" + item));
        array = temp;
    } else if (props.type === "shape") {
        var temp = [];
        for (let i = 0; i < props.array.length; i++) {
            const frameShape = props.array[i].frameShape;
            if (!temp.includes(frameShape)) {
                temp.push(frameShape);
            }
        }
        src = temp.map((item) => require(`../../../Images/glasses/frames/${item}.png`));
        const t = temp.map((item) => {
            return { name: item };
        });
        array = t;
    } else {
        src = array.map((item) => require("../../../Images/glasses/frames/" + item.Src));
    }

    return (
        <div>
            <h5 className="filter-header">{props.header}</h5>
            <div className="frame-shape-container display-flex flex-wrap space-around text-center">
                {array.map((item, index) => (
                    <div
                        key={index}
                        className="two-frame-shape-container"
                        style={isColor ? { padding: "5px" } : { padding: "auto" }}
                    >
                        {isColor && (
                            <div>
                                <div className="filter-colors" key={index.id} style={{ backgroundColor: item.color }} />
                                <p>{item.colorName}</p>
                            </div>
                        )}
                        {!isColor && (
                            <div>
                                <img key={index} src={src[index]} alt="illustrated-img" />
                                <p>{array[index].name}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Frame;
