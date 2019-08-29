import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './SliderComp.css'
const content = [
    {
        title: "MEDICA THE BEST HOSPITAL WEBSITE ",
        description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.",
        button: "Read More",
        image: require('../../../images/slider1.png'),
    },
    {
        title: "MEDICA THE BEST HOSPITAL WEBSITE",
        description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.",
        button: "Read More",
        image: require('../../../images/slider2.png'),
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
                            <div className="col-xl-5 offset-xl-2 text-right pt-90">
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