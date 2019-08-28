import React from 'react'

const OurServices = () => {
    return (
        <div className="container py-5">
            <h3>OUR SERVICES</h3>
            <div className="row mt-4">
                <div className="col-xl-4">
                    <div className="d-flex">
                        <img src={require('../images/timer.png')} alt=""/>
                        <h4 className="align-self-start mt-4 ml-3">24X7 SERVICES</h4>
                    </div>
                    <p className="text-muted"><small>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</small></p>
                    <a className="text-uppercase" href="">Read more</a>
                </div>
                <div className="col-xl-4">
                    <div className="d-flex">
                        <img src={require('../images/tool.png')} alt=""/>
                        <h4 className="align-self-start mt-4 ml-3">24X7 SERVICES</h4>
                    </div>
                    <p className="text-muted"><small>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</small></p>
                    <a className="text-uppercase" href="">Read more</a>
                </div>
                <div className="col-xl-4">
                    <div className="d-flex">
                        <img src={require('../images/inject.png')} alt=""/>
                        <h4 className="align-self-start mt-4 ml-3">24X7 SERVICES</h4>
                    </div>
                    <p className="text-muted"><small>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</small></p>
                    <a className="text-uppercase" href="">Read more</a>
                </div>
            </div>
        </div>
    )
};

export default OurServices