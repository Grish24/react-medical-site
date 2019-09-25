import React from 'react'
import '../components/HomeGroup/HomeGroup.css'
import about1 from '../assets/images/about1.jpg'
import CareerContainer from '../components/Career/CareerContainer'

const AboutUs = () => {
    return (
        <div className="container-fluid bg-lightGray">
            <div className="col-xl-9 mx-auto py-5">
            <div className="row">
                <div className="col-lg-4 col-sm-6 px-lg-4">
                    <div className="card border-0 bg-transparent">
                        <h3 className="card-title border-b-1 pb-3 mb-3">Who We Are</h3>
                        <img src={about1} className="card-img-top"
                             alt="..."/>
                        <div className="card-body px-0">
                            <p className="card-text mb-1">LOREM IPM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
                                PRAESENT VESTIBULUM.</p>
                            <p className="card-text">
                                <small className="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris. Phasellus porta.
                                    Fusce suscipit varius mi.

                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum
                                    molestie lacus. Aeonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius
                                    mi.
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 px-lg-4">
                    <h3 className="border-b-1 pb-3 mb-3">OUR HISTORY</h3>
                    <CareerContainer />
                </div>
                <div className="col-lg-4 col-sm-6 services-links px-lg-4">
                    <h3 className="border-b-1 pb-3 mb-3">OUR SERVICES</h3>
                    <h6>LOREM IPM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. PRAESENT VESTIBULUM.</h6>
                    <p className="text-muted">
                        <small>Praesent vestibulum molestie lacus. Aeonummy hendrerit mauris. Phasellus porta. Fusce
                            suscipit varius mi. Morbi nunc odio, gida at, cursus nec, luctus a, lorem. Maecenas
                            tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec
                            sit amet eros.
                        </small>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>
                    <p className="mb-0">
                        <a href="/">Lorem text dolor sit amet</a>
                    </p>

                </div>
            </div>

        </div>
        </div>
    )
};

export default AboutUs
