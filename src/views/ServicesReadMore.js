import React from 'react'

const ServicesReadMore = (props) => {
    const data = props.data;
    return(
        <div>
            <h3 className="mb-4">{data.title}</h3>
            <img src={`${process.env.REACT_APP_API_URL}${data.image}`} alt=""/>
            <p className="mt-4">{data.description}</p>
        </div>
    )
};

export default ServicesReadMore