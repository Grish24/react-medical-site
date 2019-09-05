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
                    <Route exact path="/" component={HomePage} />
                    <Route path="/About" component={AboutUs} />
                    <Route path="/Services" component={OurServices} />
                    <Route path="/Contact" component={Contact} />
                    <Redirect to='/'/>
                </Switch>
            </section>
        </>
    )
};

export default MainContent
