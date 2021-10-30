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
    const { name, location, description, img, price, attraction } = singlePackage;
    useEffect(() => {
        const url = `http://localhost:5000/packages/${bookingId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, []);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        let bookedPackage = data;
        bookedPackage.packageName = singlePackage.name;
        bookedPackage.img = singlePackage.img;
        bookedPackage.status = 'pending';

        fetch('http://localhost:5000/bookedPackage', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedPackage)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your request has placed for approval')
                }
                reset();

            })
    };


    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col md={8} sm={12}>
                        <img src={img} className="img-fluid" alt="" />
                        <div className="mx-5">
                            <h3>{name}</h3>
                            <div className="d-flex justify-content-between">
                                <p>Location: {location}</p>
                                <h5> ${price}</h5>
                            </div>
                            <p className="text-start">{description}</p>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <h3 className="mb-3">Booking Form</h3>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Control className="mb-2" {...register("name")} type="name" defaultValue={user.displayName} />

                            <Form.Control className="mb-2" {...register("email")} type="email" defaultValue={user.email} />
                            <Form.Control className="mb-2" as="textarea" {...register("address")} cols="30" rows="2" placeholder="Address" />
                            <Form.Control className="mb-2" {...register("city")} type="text" placeholder="City" />
                            <Form.Control className="mb-2" {...register("country")} type="text" placeholder="Country" />

                            <Form.Control className="mb-2" {...register("phone")} type="number" placeholder="Phone Number" />
                            <Form.Control className="mb-2" {...register("tourDuration")} type="number" placeholder="Tour Duration(Days)" />
                            <Form.Control className="mb-2" {...register("date")} type="date" placeholder="Date" />

                            <Form.Control className="bg-primary text-white" type="submit" />
                        </Form>

                    </Col>
                </Row>
                <Row className="my-5" >
                    <h3 className="my-5">Top Attraction</h3>
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