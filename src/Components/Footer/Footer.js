import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row className="pt-5 g-4 text-white">
                    <Col lg={6} sm={12} >
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/travele-logo.png" alt="" />
                        <h3 className="my-3" >Travele Tour Agency</h3>
                        <p>Get a holiday and book Package of us.We are always with you to explore the world.
                        </p>
                    </Col>
                    <Col lg={6} sm={12} >
                        <h3>Information</h3>
                        <h5>Address:</h5>
                        <p> 108, Charlotte Street, London, England</p>
                        <p>Mail: travele@gmail.com</p>
                        <p>Phone: 012378965,12546878</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;