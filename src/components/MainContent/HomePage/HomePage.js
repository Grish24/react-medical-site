import React from 'react'
import Slider from '../../Slider/Slider'
import HomeGroup from './HomeGroup/HomeGroup'


const HomePage = () => {
    return (
        <>
        <div className="container-fluid">
            <Slider/>
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