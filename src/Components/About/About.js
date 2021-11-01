import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <Container className="py-5">
                <Row>
                    <Col md={6} sm={12} >
                        <div className="mx-4 mt-5 ">
                            <img className="img-fluid" src="https://i.ibb.co/JsqdqRx/about.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="mx-5 text-start mt-5">
                            <h1>World Best Travel</h1>
                            <h1>Agency Company</h1>
                            <h1>Since 2008.</h1>
                            <p className="mt-3">We started our company in 2008. We have served more than million clients all over the world since then.Our team always try their best to ensure best facilities.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;