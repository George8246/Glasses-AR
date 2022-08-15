import React from "react";
import LogoImage from "./glasses-logo.png";

function Logo() {
    return (
        <a className="navbar-brand" href="">
            <img src={LogoImage} alt="Logo" width="50" height="50" />
            Glasses AR
        </a>
    );
}
export default Logo;
