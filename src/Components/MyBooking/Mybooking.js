import React from 'react';

import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';


const Mybooking = () => {
    const { user } = useAuth();
    const [myBooking, setMyBooking] = useState([]);
    const [control, setControl] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:5000/myBooking/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBooking(data)
            })
    }, [user.email, control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this?');
        if (proceed) {
            fetch(`http://localhost:5000/deletePackage/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })
        }


    }
    return (
        <div>
            <Container>
                <h2 className="my-5">My Bookings</h2>
                <Row>
                    {myBooking.map(myPackage => (
                        <Col md={3} key={myPackage._id}>
                            <Card>
                                <Card.Img variant="top" src={myPackage.img} />
                                <Card.Body>
                                    <Card.Title className="text-start">{myPackage.packageName}</Card.Title>
                                    <Card.Text className="text-start mt-3">
                                        <p>Date: {myPackage.date}</p>
                                        <p>Duration: {myPackage.tourDuration} Days</p>
                                        <p> Satus: {myPackage.status}</p>
                                        <Button onClick={() => handleDelete(myPackage._id)} className="btn-danger">Delete</Button>
                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Mybooking;