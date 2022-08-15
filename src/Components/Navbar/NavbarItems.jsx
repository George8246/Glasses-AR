import React from "react";
import NavbarSearch from "./NavbarSearch";

function NavbarItems() {
    return (
        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                    Brands
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Sale
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Men
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
