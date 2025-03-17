import { useLocation } from "react-router-dom";
import ViewProductsBody from "./ViewProductsBody";
import Footer from "../../BasicComponents/Footer/Footer";
import Navbar from "../../BasicComponents/Navbar/Navbar"

function ProductView() {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("glasses");

    return (
        <div>
            <ViewProductsBody id={id} />
            <Footer />
        </div>
    );
}

export default ProductView;
