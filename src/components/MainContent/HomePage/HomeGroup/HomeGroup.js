import React from 'react'
import Welcome from './Welcome'
import AboutUsHome from './AboutUsHome'
import OurServicesHome from './OurServicesHome'


const HomeGroup = () => {
    return (
        <>
            <div className="row py-5 bg-light">
                <div className="col-xl-5">
                    <Welcome/>
                </div>
                <div className="col-xl-5">
                    <AboutUsHome/>
                </div>
                <div className="col-xl-2">
                    <OurServicesHome/>
                </div>
            </div>
        </>
    )
};

export default HomeGroup