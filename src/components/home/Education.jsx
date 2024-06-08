import React from 'react';
import EducationCard from "./EducationCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Education = ({experiences}) => {
    return (  
        <section className="section bg-light">
            <Container>
                <Jumbotron fluid className="bg-light">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <Row>
                        {
                            experiences.data.map((d, i) => {
                                return <EducationCard key={d.title} data={d} col={i == experiences.data.length - 1 && i % 2 == 0 ? 12 : 6} />
                            })
                        }
                    </Row>
                    <p className="lead mt-4 text-center">
                        {experiences.footer}
                    </p>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Education;