import React from 'react'

const OurServices = () => {
    return (
        <div className="container-fluid bg-lightGray">
            <div className="col-xl-9 mx-auto py-5">
                <h3>OUR SERVICES</h3>
                <div className="row mt-4">
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="d-flex">
                            <img src={require('../images/timer.png')} alt=""/>
                            <h4 className="align-self-start mt-4 ml-3">24X7 SERVICES</h4>
                        </div>
                        <p className="text-muted"><small>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</small></p>
                        <a className="text-uppercase" href="/">Read more</a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="d-flex">
                            <img src={require('../images/tool.png')} alt=""/>
                            <h4 className="align-self-start mt-4 ml-3">24X7 SERVICES</h4>
                        </div>
                        <p className="text-muted"><small>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</small></p>
                        <a className="text-uppercase" href="/">Read more</a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="d-flex">
                            <img src={require('../images/inject.png')} alt=""/>
                            <h4 className="align-self-start mt-4 ml-3">24X7 SERVICES</h4>
                        </div>
                        <p className="text-muted"><small>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</small></p>
                        <a className="text-uppercase" href="/">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OurServices
