import React from "react";
import { Link } from "react-router-dom";

const NavItem = props => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.navTo}>{props.navText}</Link>
        </li>
    );
}

export default NavItem;