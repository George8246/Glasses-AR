import "./Cover.css";
import FloatingDataCover from "./FloatingDataCover";

function MainCover() {
    return (
        <section className="container-fluid cover">
            <img src={require("../../../Images/Cover.png")} alt="" />
            <FloatingDataCover />
        </section>
    );
}

export default MainCover;
