import React from 'react';

import {
    Col,
    Card
} from "react-bootstrap";
const ExperienceCard = ({ data, col = 6 }) => {
    return (
        <Col lg={col}>
            <div className="pb-1 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt="" />
                <h1>{data.role}</h1>
                <p className="lead">
                    <strong>{data.company}</strong>
                    <br />
                    {data.date}
                </p>

            </div>
        </Col>
    );
}
 
export default ExperienceCard;