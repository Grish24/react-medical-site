import React from 'react'

const CareerComp = ({data}) => {
    return (
        <>
            <div className="card border-0 bg-transparent">
                <h3 className="card-title border-b-1 pb-3 mb-3">Who We Are</h3>
                <img src={`${process.env.REACT_APP_API_URL}${data.image}`} className="card-img-top"
                     alt="..."/>
                <div className="card-body px-0">
                    {/*<p className="card-text mb-1">LOREM IPM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.*/}
                        {/*PRAESENT VESTIBULUM.</p>*/}
                    <p className="card-text">
                        <small className="text-muted">
                            {data.title}
                        </small>
                    </p>
                </div>
            </div>
        </>

    )
};
export default CareerComp
