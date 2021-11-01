import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://frightful-fangs-32652.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className="package">

            <Container className="py-5">
                <h2 className="my-5">Our packages</h2>
                <Row className="gy-4">
                    {packages.map(pk => (
                        < Col md={4} sm={12} key={pk._id} >
                            <Card className="border-0 package-card">
                                <Card.Img variant="top" src={pk.img} />
                                <Card.Body>
                                    <Card.Title className="text-start"><h3>{pk.name}</h3></Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <p className="text-success">Location: {pk.location}</p>
                                        <h5 className="text-warning"> ${pk.price}</h5>
                                    </div>

                                    <Card.Text className="text-start">
                                        <small>{pk.description.slice(0, 150)}</small>

                                    </Card.Text>
                                    <div className="text-start">
                                        <Link to={`/booking/${pk._id}`}><Button className="btn-success mt-2 ">Book Now</Button></Link>
                                    </div>
                                </Card.Body>

                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    );
};

export default Packages;