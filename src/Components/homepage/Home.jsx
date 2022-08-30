import Cover from "./Cover/Cover";
import HomeProducts from "./HomeProducts/BigProductsDivs";
import TopSelling from "./HomeProducts/TopSelling";
import Contact from "./Contact";
import Footer from "../BasicComponents/Footer/Footer";

function Home() {
    return (
        <div>
            <Cover />
            <HomeProducts status="new" />
            <TopSelling />
            <HomeProducts status="sale" />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
