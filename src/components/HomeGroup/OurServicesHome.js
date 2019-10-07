import React from 'react'
import ApiCallContainer from '../../layout/App/ApiCallContainer'
import ServicesList from '../../components/Services/ServicesList'

const OurServices = () => {

    return (

        <div className="container d-flex flex-column h-100 px-0 services-links">
            <h2 className="text-uppercase">OUR SERVICES</h2>

            <ApiCallContainer componentForRender={ServicesList} apiPath="services"/>


            <button className="btn mt-auto">Read More</button>

        </div>
    )
};

export default OurServices