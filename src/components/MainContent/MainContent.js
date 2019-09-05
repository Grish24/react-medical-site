import React from 'react'
import HomePage from './HomePage/HomePage'
import {Route,Switch, Redirect} from 'react-router-dom'
import AboutUs from '../AboutUs'
import OurServices from '../Services'
import Contact from '../Contact'
import './MainContent.css'
const MainContent = () => {
    return (
        <>
            <section className="main-content">
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/About" component={AboutUs} />
                    <Route path="/Services">
                        <div className="container-fluid bg-lightGray">
                            <OurServices/>
                        </div>
                    </Route>
                    <Route path="/Contact" >
                        <div className="container-fluid bg-lightGray">
                            <Contact/>
                        </div>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </section>
        </>
    )
};

export default MainContent
