import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Card, Col, Container, Form, Placeholder, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';




const BookingPackage = () => {
    const [singlePackage, setSinglePackage] = useState({})
    const { bookingId } = useParams();
    const { user } = useAuth();
    console.log(singlePackage)
    const { name, location, description, img, price, attraction } = singlePackage;
    useEffect(() => {
        const url = `http://localhost:5000/packages/${bookingId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        let bk = singlePackage;
        bk.buyer = data;
        bk.email = data.email;
        console.log(bk)

        console.log(data)
    };


    return (
        <div>
            <h2>Please book {bookingId}</h2>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <img src={img} className="img-fluid" alt="" />
                        <h3>{name}</h3>
                        <div className="d-flex justify-content-between">
                            <p>Location: {location}</p>
                            <h5> ${price}</h5>
                        </div>
                        <p>{description}</p>
                    </Col>
                    <Col md={6}>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Control {...register("Name")} type="name" defaultValue={user.displayName} />

                            <Form.Control {...register("Email")} type="email" defaultValue={user.email} />
                            <Form.Control {...register("city")} type="text" placeholder="City" />
                            <br />
                            <Form.Control as="textarea" {...register("address")} cols="30" rows="2" />

                            <Form.Control className="bg-primary text-white" type="submit" />
                        </Form>

                    </Col>
                </Row>
                <Row>
                    <h3>Top Attraction</h3>
                    {attraction?.map(place => (
                        <Col key={place.place} md={3} sm={12}>
                            <Card>
                                <Card.Img variant="top" src={place.images} />
                                <Card.Body>
                                    <Card.Title>{place.place}</Card.Title>
                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
};

export default BookingPackage;