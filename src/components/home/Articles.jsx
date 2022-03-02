import React from 'react';
import {
    Container,
    Jumbotron, 
    Row,
    Col,
    Card
 } from "react-bootstrap";

const Articles = ({articles}) => {
    return (  
        <section className="section">
            <Container>
                <h2 className="display-4 mb-5 text-center">
                    {articles.heading}
                </h2>
                <Row>
                    {
                        articles.data.map(data => {
                            return <ArticleCard data={data} />
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}

function ArticleCard ({data}) {
    return ( 
        <Col md={12}>
            <a class="card shadow-lg p-3 mb-5 bg-white rounded stretched-link text-decoration-none text-dark" href={data.url} target="_blank">
                <Card.Body>
                    <Card.Title as="h5">{data.title} </Card.Title>
                    <Card.Text>
                        <p>
                            {data.abstract} 
                        </p>
                    </Card.Text>
                    <footer class="float-right">
                        <h6>{data.journal}</h6> 
                        <cite>{data.date}</cite>
                    </footer>
                </Card.Body>
            </a>
        </Col>
     );
}
 
export default Articles;