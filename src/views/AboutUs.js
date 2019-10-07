import React from 'react'
import '../components/HomeGroup/HomeGroup.css'
import ApiCallContainer from '../layout/App/ApiCallContainer'
import InfoComp from '../components/InfoComp'
import CareerComp from '../components/CareerComp'
import ServicesList from '../components/Services/ServicesList'

const AboutUs = () => {
    return (
        <div className="container-fluid bg-lightGray">
            <div className="col-xl-9 mx-auto py-5">
            <div className="row">
                <div className="col-lg-4 col-sm-6 px-lg-4">
                    <ApiCallContainer componentForRender={InfoComp} apiPath="about"/>
                </div>
                <div className="col-lg-4 col-sm-6 px-lg-4">
                    <h3 className="border-b-1 pb-3 mb-3">OUR HISTORY</h3>
                    <ApiCallContainer componentForRender={CareerComp} apiPath="career"/>
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
                    <ApiCallContainer componentForRender={ServicesList} apiPath="services"/>
                </div>
            </div>

        </div>
        </div>
    )
};

export default AboutUs
