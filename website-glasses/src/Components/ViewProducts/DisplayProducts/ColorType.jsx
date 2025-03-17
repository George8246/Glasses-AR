function ColorType(props) {
    var temp = [];
    for (let i = 0; i < props.array.length; i++) {
        const item = props.array[i].colorTypes;
        if (!temp.includes(item)) {
            temp.push(item);
        }
    }

    return (
        <div>
            {temp.map((item, index) => (
                <div className="display-flex flex-wrap space-around color-type">
                    <h5>{item}</h5>
                    <input type="checkbox" name={item} />
                </div>
            ))}
        </div>
    );
}

export default ColorType;
