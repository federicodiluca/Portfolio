import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const EducationCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-1 text-center">
                <img className="bg-white mb-3" src={data.logo} alt=""/>
                <h1>{data.title}</h1>
                <p className="lead">
                    { (data.subTitle || data.mark) && <strong>{data.subTitle} {data.mark ? `(${data.mark})` : ''}</strong> }
                    { (data.subTitle || data.mark) && <br/> }
                    { data.institute }
                    { data.institute && <br/> }
                    { data.date }
                </p>
                
            </div>
        </Col>
     );
}
 
export default EducationCard;