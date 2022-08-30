import "../../Styles/GenralStyles.css";

function Container(props) {
    const c = props.classes === undefined ? "custom-container" : props.classes + " custom-container";
    return <section className={c}>{props.children}</section>;
}

export default Container;
