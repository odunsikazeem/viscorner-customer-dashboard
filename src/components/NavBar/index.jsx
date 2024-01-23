import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <Link className="navbar-brand" to="/">
        //             VisCorner
        //         </Link>
        //         <button
        //             class="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarNav"
        //             aria-controls="navbarNav"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item dropdown">
        //                     <NavLink
        //                         to="/shipments"
        //                         end
        //                         className={({ isActive }) =>
        //                             isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
        //                         }
        //                         data-bs-toggle="dropdown"
        //                     >
        //                        Shipment
        //                     </NavLink>
        //                     <div className="dropdown-menu">
        //                         {/* Dropdown content goes here */}
        //                         <a className="dropdown-item" href="#link1">
        //                         <FontAwesomeIcon icon={faEnvelope} />  Link 1
        //                         </a>
        //                         <a className="dropdown-item" href="#link2">
        //                             Link 2
        //                         </a>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         to="/users"
        //                         className={({ isActive }) =>
        //                             isActive ? 'nav-link active' : 'nav-link'
        //                         }
        //                     >
        //                         Users
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         to="/tracking"
        //                         className={({ isActive }) =>
        //                             isActive ? 'nav-link active' : 'nav-link'
        //                         }
        //                     >
        //                         Tracking
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> <FontAwesomeIcon icon={faNetworkWired} /> VisCorner</a>
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> <FontAwesomeIcon icon={faNetworkWired} /> VisCore</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <NavLink
                                    to="/about_us"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
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
                                    <NavLink className="dropdown-item" to="#link1">
                                        <FontAwesomeIcon icon={faEnvelope} /> Link 1
                                    </NavLink>
                                    
                                    <NavLink className="dropdown-item" to="#link2">
                                        <FontAwesomeIcon icon={faPen} /> Link 2
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    to="/shipments"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
                                    }
                                    data-bs-toggle="dropdown"
                                >
                                    Something Else
                                </NavLink>
                                <div className="dropdown-menu">
                                    {/* Dropdown content goes here */}
                                    <a className="dropdown-item" href="#link1">
                                        <FontAwesomeIcon icon={faEnvelope} />  Link 1
                                    </a>
                                    <a className="dropdown-item" href="#link2">
                                        <FontAwesomeIcon icon={faPen} /> Link 2
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
