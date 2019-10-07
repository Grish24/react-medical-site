import React from 'react'
import ApiCallContainer from '../layout/App/ApiCallContainer'
import ServicesRoute from '../components/Services/ServicesRoute'


const Services = () => {
    return (
        <div className="container-fluid bg-lightGray h-100">
            <div className="col-xl-9 mx-auto py-5">
                <ApiCallContainer componentForRender={ServicesRoute} apiPath="services" />
            </div>
        </div>
    )
};

export default Services
