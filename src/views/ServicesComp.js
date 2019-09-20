import React from 'react'
// import ServicesContainer from './ServicesContainer'



const ServicesComp = ({data}) => {
    return (
        <div>
        {data.map((item, index) =>
                <div key={data.id} className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="d-flex">
                        <img src={process.env.REACT_APP_API_URL} alt=""/>
                        <h4 className="align-self-start mt-4 ml-3">{data.title}</h4>
                    </div>
                    <p className="text-muted"><small>{data.description}</small></p>
                    <a className="text-uppercase" href="/">Read more</a>
                </div>
            )}
        </div>
    )
};

export default ServicesComp
