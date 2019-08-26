import React from 'react'
import Welcome from './Welcome'
import AboutUs from './AboutUs'
import OurServices from './OurServices'


const HomeGroup = () => {
    return (
        <>
            <div className="row py-5 bg-light">
                <div className="col-xl-5">
                    <Welcome/>
                </div>
                <div className="col-xl-5">
                    <AboutUs/>
                </div>
                <div className="col-xl-2">
                    <OurServices/>
                </div>
            </div>
        </>
    )
};

export default HomeGroup