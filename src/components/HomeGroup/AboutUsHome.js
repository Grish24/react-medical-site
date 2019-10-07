import React from 'react'

const AboutUsHome = ({data}) => {
    return (
        <div className="container d-flex flex-column h-100 px-0">
            <h2 className="text-uppercase">About Us</h2>

            {
                <p className="text-muted mb-1">{data.title}</p>
            }

            <button className="btn mt-auto">Read More</button>

        </div>
    )
};

export default AboutUsHome