import React from 'react'
import {Link } from 'react-router-dom'

const ServicesList = ({data}) => {
    return (
        <>
        {data.map((item, index) =>
            <p key={index} className="mb-0">
                <Link  className="text-uppercase"  to={`/Services/${item.id}`}>
                    {item.title}
                </Link>
            </p>
        )}

        </>

    )
};
export default ServicesList
