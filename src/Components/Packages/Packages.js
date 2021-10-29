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
            <h2>Our packages</h2>
            <Container>
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

                                    <Card.Text>
                                        <small>{pk.description.slice(0, 150)}</small>
                                    </Card.Text>

                                </Card.Body>
                                <Link to={`/booking/${pk._id}`}><Button className="btn-success">Book Now</Button></Link>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    );
};

export default Packages;