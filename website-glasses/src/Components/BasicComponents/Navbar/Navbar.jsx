import React, { useState, useCallback, useEffect } from "react";
import NavbarItems from "./NavbarItems";
import Logo from "./Logo";
import InfoSignInOut from "./InfoSignInOut";
import NavbarSearch from "./NavbarSearch";
import "../../Styles/Navbar.css";
import axios from "axios";

function Navbar(props) {
    const [y, setY] = useState(10);
    const [navStyle, setNavStyle] = useState({ backgroundColor: "#fff", position: "sticky", top: "0" });
    const [change, setChange] = useState(false);
    const [logoImage, setLogoImage] = useState(require("../../../Images/glasses-logo-dark.png"));
    const [hoverLogo, sethoverLogo] = useState(require("../../../Images/glasses-logo.png"));
    const [loggedIn, setloggedIn] = useState(false);
    const [Name, setName] = useState("");

    var stat = props.status === undefined ? "all" : props.status;
    var Search;
    var SignIn;
    var SignUp;

    switch (stat) {
        case "Search":
            Search = true;
            SignIn = false;
            SignUp = false;
            break;
        case "SignIn":
            Search = false;
            SignIn = true;
            SignUp = false;
            break;
        case "SignUp":
            Search = false;
            SignIn = false;
            SignUp = true;
            break;
        default:
            Search = true;
            SignIn = true;
            SignUp = true;
            break;
    }

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y < 500) {
                setNavStyle({ backgroundColor: "#fff", position: "sticky", top: "0" });
                setLogoImage(require("../../../Images/glasses-logo-dark.png"));
                sethoverLogo(require("../../../Images/glasses-logo.png"));
                setChange(false);
            } else if (y > 500) {
                setNavStyle({ backgroundColor: "#16243a", position: "sticky", top: "0" });
                setLogoImage(require("../../../Images/glasses-logo-light.png"));
                sethoverLogo(require("../../../Images/glasses-logo-light.png"));
                setChange(true);
            }
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    useEffect(() => {
        axios
            .post("isLogged", { withCredentials: true })
            .then(function (response) {
                setloggedIn(response.data.log);
                setName(response.data.name.charAt(0));
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
            });
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
            <div className="container-fluid">
                <Logo img={change ? require("../../../Images/glasses-logo-white.png") : logoImage} hoverLogo={hoverLogo} change={change} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {Search && <NavbarSearch />}
                    <NavbarItems change={change} />
                    {!loggedIn && <InfoSignInOut SignIn={SignIn} SignUp={SignUp} change={change} />}
                    {loggedIn && <h1 className="nameLetter">{Name}</h1>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
