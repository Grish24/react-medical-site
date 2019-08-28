import React from 'react'
import './responsiveslides.css'
// import './responsiveslides.min'

const Slider = () => {
    return (
        <div>
            <div className="image-slider">
                <ul className="rslides rslides1" id="slider1" >
                    <li id="rslides1_s0" className="" >
                        <img src="images/slider3.png" alt=""/>
                            <div className="slider-info">
                                <p>Medica the best Hospital website</p>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                                <a href="#">ReadMore</a>
                            </div>
                    </li>
                    <li id="rslides1_s1" className="" >
                        <div className="slider-info">
                            <p>Medica the best Hospital website</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                            <a href="#">ReadMore</a>
                        </div>
                    </li>
                    <li id="rslides1_s2" className="rslides1_on" >
                        <div className="slider-info">
                            <p>Medica the best Hospital website</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                            <a href="#">ReadMore</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Slider;