import { Link } from "react-router-dom";

function NavbarItems(props) {
    const classes = props.change ? "nav-link white-anchor" : "nav-link";

    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className={classes} aria-current="page" href="">
                    Brands
                </a>
            </li>
            <li className="nav-item">
                <a className={classes} href="">
                    Sale
                </a>
            </li>
            <li className="nav-item">
                <Link to="/display-products?type=male" className={classes}>Men</Link>
            </li>
            <li className="nav-item">
                <Link to="/display-products?type=female" className={classes}>Women</Link>
            </li>
            <li className="nav-item">
                <Link to="/display-products?type=kids" className={classes}>Kids</Link>
            </li>
        </ul>
    );
}

export default NavbarItems;
