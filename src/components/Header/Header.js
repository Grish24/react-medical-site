import React ,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
class Header extends Component{
    state = {
        isOpen : false,
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
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
                            <a href="/">
                                <img className="img-fluid" width={60} src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt=""/>
                            </a>
                            <div className="ml-auto">
                                <a href="/">
                                    <img src={require('../../images/facebook.png')} alt=""/>
                                </a>
                                <a className="mx-2" href="/">
                                    <img src={require('../../images/twitter.png')} alt=""/>
                                </a>
                                <a href="/">
                                    <img src={require('../../images/feed.png')} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-blue px-0">
                    <div className="col-xl-9 mx-auto">
                        <nav className="navbar navbar-expand-sm navbar-dark px-0 py-1 py-sm-0">
                            {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                            <button onClick={this.toggle} className="navbar-toggler ml-auto" type="button" >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse py-3 py-sm-0 ${this.state.isOpen ? 'show' : null}`} id="navbarNav" >
                                <ul className="navbar-nav custom-links">
                                    <li className="nav-item mb-2 mb-sm-0">
                                        {
                                            <NavLink className="nav-link text-uppercase " to="/home"  onClick={this.handlerClick}>
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