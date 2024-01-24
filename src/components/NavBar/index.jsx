import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { logoutUser } from '../../feature/userSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
    const dispatch = useDispatch();
    return (
        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> <FontAwesomeIcon icon={faNetworkWired} /> VisCorner</a>
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> <FontAwesomeIcon icon={faNetworkWired} /> VisCorner</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <Button  variant="info" onClick={() =>dispatch(logoutUser())}>Log Out</Button>
                            <li class="nav-item">
                                <NavLink
                                    to="home"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    to="request"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    Request
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
