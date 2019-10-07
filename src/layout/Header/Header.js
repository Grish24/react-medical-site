import React ,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import feed from '../../assets/images/feed.png'

class Header extends Component{
    state = {
        isOpen : false,
    };
    toggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
    }))};
    handlerClick = () =>{
        this.toggle()
    };
    render() {
        return (
            <>
            <header>
                <div className="container-fluid bg-light px-0">
                    <div className="col-xl-9 mx-auto">
                        <div className="main-header d-flex py-4">
                            <NavLink className="nav-link text-uppercase p-0" to="/" >
                                <img className="img-fluid" width={60} src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt=""/>
                            </NavLink>
                            <div className="ml-auto">
                                <a href="/">
                                    <img src={facebook} alt=""/>
                                </a>
                                <a className="mx-2" href="/">
                                    <img src={twitter} alt=""/>
                                </a>
                                <a href="/">
                                    <img src={feed} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-blue px-0">
                    <div className="col-xl-9 mx-auto">
                        <nav className="navbar navbar-expand-sm navbar-dark px-0 py-1 py-sm-0">
                            <button onClick={this.toggle} className="navbar-toggler ml-auto" type="button" >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className={`collapse navbar-collapse py-3 py-sm-0 ${this.state.isOpen ? 'show' : ''}`} id="navbarNav" >
                                <ul className="navbar-nav custom-links">
                                    <li className="nav-item mb-2 mb-sm-0">
                                        {
                                            <NavLink exact className="nav-link text-uppercase " to="/"  onClick={this.handlerClick}>
                                                Home
                                            </NavLink>
                                        }
                                    </li>
                                    <li className="nav-item mb-2 mb-sm-0">
                                        {
                                            <NavLink className="nav-link text-uppercase " to="/About"  onClick={this.handlerClick}>
                                                About
                                            </NavLink>
                                        }
                                    </li>
                                    <li className="nav-item mb-2 mb-sm-0">
                                        {
                                            <NavLink className="nav-link text-uppercase " to="/Services"  onClick={this.handlerClick}>
                                                Services
                                            </NavLink>
                                        }
                                    </li>
                                    <li className="nav-item mb-2 mb-sm-0">
                                        {
                                            <NavLink className="nav-link text-uppercase " to="/Contact"  onClick={this.handlerClick}>
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
    }

};

export default Header
