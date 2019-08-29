import React from 'react'
import SliderComp from '../Slider/SliderComp'
import HomeGroup from './HomeGroup/HomeGroup'


const HomePage = () => {
    return (
        <>
        <div className="container-fluid">
            <SliderComp/>
        </div>
        <div className="container-fluid bg-light">
            <div className="container">
                <HomeGroup/>
            </div>
        </div>
        </>
    )
};

export default HomePage