import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <Row>
                        {
                            experiences.data.map((d, i) => {
                                console.log(i)
                                return <ExperienceCard key={d.company} data={d} col={i == experiences.data.length - 1 && i % 2 == 0 ? 12 : 6} />
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
 
export default Experience;