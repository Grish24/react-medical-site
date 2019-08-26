import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header>
            <div className="container-fluid bg-light px-0">
                <div className="container">
                    <div className="main-header py-4">
                        <a href="">
                            <img className="img-fluid" width={60} src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt=""/>
                        </a>

                    </div>
                </div>
            </div>
            <div className="container-fluid bg-primary px-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark px-0">
                        {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {
                                        <NavLink className="nav-link" to="/home">
                                            Home
                                        </NavLink>
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        <NavLink className="nav-link" to="/About">
                                            About
                                        </NavLink>
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        <NavLink className="nav-link" to="/Services">
                                            Services
                                        </NavLink>
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        <NavLink className="nav-link" to="/Contact">
                                            Contact
                                        </NavLink>
                                    }
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        </header>
        </>
    )
};

export default Header