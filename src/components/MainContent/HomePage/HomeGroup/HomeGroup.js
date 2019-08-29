import React from 'react'
import Welcome from './Welcome'
import AboutUsHome from './AboutUsHome'
import OurServicesHome from './OurServicesHome'
import './HomeGroup.css'

const HomeGroup = () => {
    return (
        <>
            <div className="home-group row py-5 bg-light">
                <div className="col-xl-4">
                    <Welcome/>
                </div>
                <div className="col-xl-4">
                    <AboutUsHome/>
                </div>
                <div className="col-xl-4">
                    <OurServicesHome/>
                </div>
            </div>
        </>
    )
};

export default HomeGroup