import React from 'react'
import ApiCallContainer from '../layout/App/ApiCallContainer'
import SliderComp from '../components/Slider/SliderComp'
import HomeGroup from '../components/HomeGroup/HomeGroup'


const HomePage = () => {
    return (
        <>
        <div className="container-fluid px-0">
            <ApiCallContainer componentForRender={SliderComp} apiPath="slider"/>
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