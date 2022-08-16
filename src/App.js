import "./App.css";
import Navbar from "./Components/homepage/Navbar/Navbar";
import Cover from "./Components/homepage/Cover/Cover";
import Arrival from "./Components/homepage/Products/NewArivals";
import TopSelling from "./Components/homepage/Products/TopSelling";
import Sale from "./Components/homepage/Products/Sale";
import Contact from "./Components/homepage/Footer/Contact";
import Footer from "./Components/homepage/Footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Cover />
            <Arrival />
            <TopSelling />
            <Sale />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
