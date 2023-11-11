import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} style={{ width: '40px', marginRight: '-20px' }} alt="Logo" />
                </NavLink>
                <NavLink className="navbar-brand" to="/">
                    <span className="d-sm-none"><img src={process.env.PUBLIC_URL + '/images/logo3.png'} style={{ width: '60px'}} alt="Logo" /></span>
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeclassname="active">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product" activeclassname="active">
                                Product
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
