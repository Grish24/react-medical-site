import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import '../Main.css'
import {Link } from 'react-router-dom'



const ServicesComp = ({data}) => {


return (
    <div>
        <h3 className="mb-4">OUR SERVICES</h3>
        <div className="row services-style">
            {data.map((item, index) =>
                <div key={index} className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="d-flex">
                        <img src={`${process.env.REACT_APP_API_URL}${item.image}`} alt=""/>
                        <h4 className="align-self-start mt-4 ml-3">{item.title}</h4>
                    </div>
                    <LinesEllipsis
                        text={item.description}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        component='p'
                    />

                    <Link  className="text-uppercase"  to={`/Services/${item.id}`}>
                        Read more
                    </Link>

                    {/*<a href={`/Services/${item.id}`}>Read more</a>*/}

                </div>
            )}
        </div>
    </div>

)
}
export default ServicesComp
