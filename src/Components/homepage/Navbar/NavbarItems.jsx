import NavbarSearch from "./NavbarSearch";

function NavbarItems(props) {
    const classes = props.change ? "nav-link white-anchor" : "nav-link";

    return (
        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className={classes} aria-current="page" href="#">
                    Brands
                </a>
            </li>
            <li className="nav-item">
                <a className={classes} href="#">
                    Sale
                </a>
            </li>
            <li className="nav-item">
                <a className={classes} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Men
                </a>
            </li>
            <li className="nav-item">
                <a className={classes} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Women
                </a>
            </li>
            <li className="nav-item">
                <NavbarSearch />
            </li>
        </ul>
    );
}

export default NavbarItems;
