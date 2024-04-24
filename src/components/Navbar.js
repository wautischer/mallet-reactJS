import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './components.css'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top blur-background">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
                        <img src={process.env.PUBLIC_URL + '/images/logo/android-chrome-512x512.png'} alt="Logo"
                             className="img-fluid d-none d-sm-inline" style={{width: '40px', marginLeft: '15px'}}/>
                        <img src={process.env.PUBLIC_URL + '/images/logo/favicon-580x200.png'} style={{width: '60px'}}
                             alt="Logo" className="d-sm-none"/>
                    </NavLink>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={closeMenu}>
                            <NavLink className="nav-link" to="/about" activeclassname="active">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <NavLink className="nav-link" to="/product" activeclassname="active">
                                Product
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <NavLink className="nav-link" to="/team" activeclassname="active">
                                Team
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <NavLink className="nav-link" to="/faq" activeclassname="active">
                                FaQ
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <NavLink className="nav-link" to="/partnership" activeclassname="active">
                                Partnership
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );

};

export default Navbar;
