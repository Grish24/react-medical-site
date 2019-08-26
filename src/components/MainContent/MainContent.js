import React from 'react'
import HomePage from './HomePage/HomePage'
import {Route,Switch} from 'react-router-dom'
// import Welcome from  './HomePage/HomeGroup/Welcome'
import AboutUs from '../AboutUs'
import OurServices from '../OurServices'

const MainContent = () => {
    return (
        <>
            <section className="main-content">
                <div className="container-fluid">
                    <Switch>
                        <Route path="/" component={HomePage} />
                        <Route path="/About" component={AboutUs} />
                        <Route path="/Services" component={OurServices} />
                    </Switch>
                </div>
            </section>
        </>
    )
};

export default MainContent