import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './SliderComp.css'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'

const content = [
    {
        title: "MEDICA THE BEST HOSPITAL WEBSITE ",
        description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.",
        button: "Read More",
        image: slider1,
    },
    {
        title: "MEDICA THE BEST HOSPITAL WEBSITE",
        description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.",
        button: "Read More",
        image: slider2,
    },
];

const SliderComp = () => {
    return (
        <div className="main-slider">
            <Slider>
                {content.map((item, index) => <div key={index}>
                    <div
                        key={index}
                        className="slider-content"
                        style={{backgroundImage: `url('${item.image}')`, height: `100%`}}
                    >
                        <div className="inner main-carousel">
                            <div className="col-xl-5 col-lg-8 col-10 offset-xl-2 text-center text-sm-right align-self-center mx-auto">
                                <h1 >{item.title}</h1>
                                <p>{item.description}</p>
                                <button className="btn rounded-0">{item.button}</button>
                            </div>
                        </div>

                    </div>
                </div>)}
            </Slider>

        </div>
    )
}

export default SliderComp;