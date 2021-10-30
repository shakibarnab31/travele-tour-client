import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>

            <Container className="my-5">
                <h2 className="my-5">Our packages</h2>
                <Row className="gy-4">
                    {packages.map(pk => (
                        < Col md={4} sm={12} key={pk._id} >
                            <Card>
                                <Card.Img variant="top" src={pk.img} />
                                <Card.Body>
                                    <Card.Title>{pk.name}</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <p>Location: {pk.location}</p>
                                        <h5> ${pk.price}</h5>
                                    </div>

                                    <Card.Text className="text-start">
                                        <small>{pk.description.slice(0, 150)}</small>
                                        <Link to={`/booking/${pk._id}`}><Button className="btn-success mt-2 ">Book Now</Button></Link>
                                    </Card.Text>

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