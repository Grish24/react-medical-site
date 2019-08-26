import React from 'react'
import HomePage from './HomePage/HomePage'
import {Route,Switch} from 'react-router-dom'
// import Welcome from  './HomePage/HomeGroup/Welcome'
import AboutUs from './HomePage/HomeGroup/AboutUs'
import OurServices from './HomePage/HomeGroup/OurServices'

const MainContent = () => {
    return (
        <>
            <section className="main-content">
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/About" component={AboutUs} />
                    <Route path="/Services" component={OurServices} />
                </Switch>
            </section>
        </>
    )
};

export default MainContent