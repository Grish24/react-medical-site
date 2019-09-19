import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './SliderComp.css'
const SliderComp = ({data}) => {
    return (
        <div className="main-slider">
            <Slider>
                {data.map((item, index) => <div key={index}>
                    <div
                        key={index}
                        className="slider-content"
                        style={{backgroundImage: `url('${process.env.REACT_APP_API_URL}${item.image}')`, height: `100%`}}
                    >
                        <div className="inner main-carousel">
                            <div className="col-xl-5 col-lg-8 col-10 offset-xl-2 text-center text-sm-right align-self-center mx-auto">
                                <h1 >{item.title}</h1>
                                {item.subTitle != null ? <p>{item.subTitle}</p> : null}
                                {item.button ? <a href={item.url} className="btn rounded-0" target="_blank" rel="noopener noreferrer">Read More</a> : null}
                            </div>
                        </div>

                    </div>
                </div>)}
            </Slider>

        </div>
    )
};

export default SliderComp;