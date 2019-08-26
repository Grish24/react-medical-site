import React from 'react'
import HomePage from './HomePage/HomePage'
import {Route,Switch} from 'react-router-dom'
import AboutUs from '../AboutUs'
import OurServices from '../OurServices'
import Contact from '../Contact'

const MainContent = () => {
    return (
        <>
            <section className="main-content">
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/About" component={AboutUs} />
                    <Route path="/Services" component={OurServices} />
                    <div className="container-fluid bg-light">
                        <Route path="/Contact" component={Contact} />
                    </div>
                </Switch>
            </section>
        </>
    )
};

export default MainContent