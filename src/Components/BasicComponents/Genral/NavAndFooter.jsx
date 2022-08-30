import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function NavAndFooter(props) {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}

export default NavAndFooter;
