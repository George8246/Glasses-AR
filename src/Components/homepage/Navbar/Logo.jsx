import React, { useState, useCallback, useEffect } from "react";

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
        setLogoImage(require("../../../Images/glasses-logo-dark.png"));
    }

    function setImage() {
        setLogoImage(props.img);
    }

    return (
        <a className={classes} onMouseEnter={logoEnter} onMouseLeave={setImage} href="">
            <img src={logoImage} alt="Logo" width="50" height="50" />
            Glasses AR
        </a>
    );
}
export default Logo;
