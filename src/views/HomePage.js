import React from 'react'
import SliderCompContainer from '../components/Slider/SliderCompContainer'
import HomeGroup from '../components/HomeGroup/HomeGroup'


const HomePage = () => {
    return (
        <>
        <div className="container-fluid px-0">
            <SliderCompContainer/>
        </div>
        <div className="container-fluid bg-light">
            <div className="col-xl-9 mx-auto">
                <HomeGroup/>
            </div>
        </div>
        </>
    )
};

export default HomePage