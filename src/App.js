import "./App.css";
import Home from "./Components/homepage/Home";
import ProductView from "./Components/ViewProducts/ViewProductDetails/ProductViewDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTopTop";
import DisplayProducts from "./Components/ViewProducts/DisplayProducts/DisplayProducts";
import SignIn from "./Components/SignIn-SignOut/SignIn";
import SignUp from "./Components/SignIn-SignOut/SignUp";
import Navbar from "./Components/BasicComponents/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/display-products">
                    <Navbar />
                    <DisplayProducts />
                </Route>
                <Route name="/view-product" path="/:id">
                    <Navbar />
                    <ProductView />
                </Route>
                <Route exact path="/sign-in">
                    <Navbar status="SignIn" />
                    <SignIn />
                </Route>
                <Route exact path="/sign-up">
                    <Navbar status="SignUp" />
                    <SignUp />
                </Route>
                <Route exact path="/">
                    <Navbar />
                    <Home />
                </Route>
            </Switch>
            <ScrollToTop smooth />
        </Router>
    );
}

export default App;
