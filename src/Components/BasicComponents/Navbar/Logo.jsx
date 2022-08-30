import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

function Logo(props) {
    const classes = props.change ? "navbar-brand white-anchor" : "navbar-brand";
    const [logoImage, setLogoImage] = useState(props.img);

    const [y, setY] = useState(10);

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y < 500) {
                setImage();
            } else if (y > 500) {
                setImage();
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

    function logoEnter() {
        setLogoImage(props.hoverLogo);
    }

    function setImage() {
        setLogoImage(props.img);
    }

    return (
        <Link to="/" className={classes} onMouseEnter={logoEnter} onMouseLeave={setImage} href="">
            <img src={logoImage} alt="Logo" width="50" height="50" />
            Glasses AR
        </Link>
    );
}
export default Logo;
