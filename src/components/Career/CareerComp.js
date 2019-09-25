import React from 'react'

const CareerComp = ({data}) => {
    return (
        <>
            <ul className="custom-ul">
                {data.map((item, index) =>
                    <li key={index}>
                        <span>{item.year} &nbsp; -  </span>
                        <span>{item.description}</span>
                    </li>
                )}
            </ul>

        </>

    )
};
export default CareerComp
