import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-1 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <h1>{data.role}</h1>
                <p className="lead">
                    <strong>{data.company}</strong>
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;