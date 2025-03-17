import { Link } from "react-router-dom";
import "../../Styles/GenralStyles.css";

function Type(props) {
    const fName = props.fName;
    const lName = props.Name;
    const b = props.Name !== "Touch" ? "type-container" : "";

    return (
        <div className={b}>
            {props.one ? (
                <h1 style={{ fontWeight: "700" }}>
                    {fName}{" "}
                    <span>
                        {lName}
                        <hr className="red-thick-line" style={{ top: "50%" }} />
                    </span>
                </h1>
            ) : (
                <h3>
                    {fName}{" "}
                    <span>
                        {lName}
                        <hr className="red-thick-line" />
                    </span>
                </h3>
            )}
            {!props.one && <Link to={"/display-products?type=" + props.type}>View All</Link>}
        </div>
    );
}

export default Type;
