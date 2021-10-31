import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='testimonial py-5'>
            <Container className=" py-5 ">
                <h1 className="mb-5 text-success">What Our Client Say About Us</h1>
                <Row>
                    <Col md={6} sm={12} className="mt-5">
                        <h3 className="my-4 text-primary">jin liyu</h3>
                        <p className="w-75 mx-auto ">I am very much grateful to Travel tour Agency.They are very hard worker and optimistic.They took care of our whole tour so nicely.I was feeling like I was with my family.Medical team and transportation was always ready that you never be worried.Best wishes for them</p>
                    </Col>
                    <Col md={6} sm={12}>
                        <img className="img-fluid" src="https://i.ibb.co/xCzv0K4/testimonial.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;