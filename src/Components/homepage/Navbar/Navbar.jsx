import React, { useState, useCallback, useEffect } from "react";
import NavbarItems from "./NavbarItems";
import Logo from "./Logo";
import InfoSignInOut from "./InfoSignInOut";
import "./Navbar.css";

function Navbar() {
    const [y, setY] = useState(10);
    const [navStyle, setNavStyle] = useState({ backgroundColor: "#fff", position: "sticky", top: "0" });
    const [change, setChange] = useState(false);

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y < 500) {
                setNavStyle({ backgroundColor: "#fff", position: "sticky", top: "0" });
                setChange(false);
            } else if (y > 500) {
                setNavStyle({ backgroundColor: "#16243a", position: "sticky", top: "0" });
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

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
            <div className="container-fluid">
                <Logo img={change ? require("../../../Images/glasses-logo-white.png") : require("../../../Images/glasses-logo-dark.png")} change={change} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavbarItems change={change} />
                    <InfoSignInOut change={change} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
