import React from "react";
import NavbarItems from "./NavbarItems";
import Logo from "./Logo";
import InfoSignInOut from "./InfoSignInOut";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Logo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavbarItems />
                    <InfoSignInOut />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
