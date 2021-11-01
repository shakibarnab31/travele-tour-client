import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <div className='services py-5'>

            <Container className="my-5">
                <h5 className="text-white mb-1">Multiple Benefits Included</h5>
                <h1 className="text-white mb-5">Our Services</h1>
                <Row >
                    <Col md={4} sm={12} className="d-flex my-4">
                        <div className=" mx-3">
                            <img className="w-100" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/12/ico-02.png" alt="" />
                        </div>
                        <div className="text-white text-start">
                            <h2>Insurance</h2>
                            <p>We are make sure your safe journey with us.When you will book a package,this service will the included for you free. </p>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="d-flex my-4">
                        <div className=" mx-3">
                            <img className="w-100" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/12/ico-06.png" alt="" />
                        </div>
                        <div className="text-white text-start">
                            <h2>Medical Care</h2>
                            <p>We are make sure your safe journey with us.When you will book a package,this service will the included for you free. </p>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="d-flex my-4">
                        <div className=" mx-3">
                            <img className="w-100" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/12/ico-01.png" alt="" />
                        </div>
                        <div className="text-white text-start">
                            <h2>Meals Included</h2>
                            <p>We are make sure your safe journey with us.When you will book a package,this service will the included for you free. </p>
                        </div>
                    </Col>

                </Row>
                <Row className="mt-5">
                    <Col md={4} sm={12} className="d-flex my-4">
                        <div className=" mx-3">
                            <img className="w-100" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/12/ico-03.png" alt="" />
                        </div>
                        <div className="text-white text-start">
                            <h2>Accessibility</h2>
                            <p>We are make sure your safe journey with us.When you will book a package,this service will the included for you free. </p>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="d-flex my-4">
                        <div className=" mx-3">
                            <img className="w-100" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/12/ico-05.png" alt="" />
                        </div>
                        <div className="text-white text-start">
                            <h2>Customer Care</h2>
                            <p>We are make sure your safe journey with us.When you will book a package,this service will the included for you free. </p>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="d-flex my-4">
                        <div className=" mx-3">
                            <img className="w-100" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/12/ico-04.png" alt="" />
                        </div>
                        <div className="text-white text-start">
                            <h2>Shuttle Included</h2>
                            <p>We are make sure your safe journey with us.When you will book a package,this service will the included for you free. </p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Services;