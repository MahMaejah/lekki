import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Lekki Project</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavItem navTo="/" navText="Home" />
                        <NavItem navTo="add" navText="Add Property" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;