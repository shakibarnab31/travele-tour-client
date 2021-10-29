import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

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
                        <Col md={4} sm={12}>
                            <Card>
                                <Card.Img variant="top" src={pk.img} />
                                <Card.Body>
                                    <Card.Title>{pk.name}</Card.Title>
                                    <h5>Location: {pk.location}</h5>
                                    <Card.Text>
                                        <small>{pk.description.slice(0, 150)}</small>
                                    </Card.Text>
                                    <h5>Price: ${pk.price}</h5>
                                </Card.Body>
                                <Button className="btn-success">Book Now</Button>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Packages;