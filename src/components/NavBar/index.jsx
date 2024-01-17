import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                    VisCorner
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <NavLink
                                to="/shipments"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
                                }
                                data-bs-toggle="dropdown"
                            >
                                Shipment
                            </NavLink>
                            <div className="dropdown-menu">
                                {/* Dropdown content goes here */}
                                <a className="dropdown-item" href="#link1">
                                <FontAwesomeIcon icon="fa-regular fa-coffee" /> Received
                                </a>
                                <a className="dropdown-item" href="#link2">
                                    Shipped
                                </a>
                                <a className="dropdown-item" href="#link2">
                                    Delievered 
                                </a>
                                <a className="dropdown-item" href="#link2">
                                    On Hold
                                </a>
                                <a className="dropdown-item" href="#link2">
                                    RTS
                                </a>
                                <a className="dropdown-item" href="#link2">
                                    New
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/users"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/tracking"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Tracking
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
