import React from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form, Row, Col, Container } from 'react-bootstrap';

const UpdateStatus = () => {
    const { bookedId } = useParams();
    const [bookedPackage, setBookedPackage] = useState({});
    const [isUpdated, setIsUpdated] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()
    const redirect_uri = '/manageAllBookings'

    useEffect(() => {
        fetch(`https://frightful-fangs-32652.herokuapp.com/bookedPackage/${bookedId}`)
            .then(res => res.json())
            .then(data => setBookedPackage(data))
    }, [isUpdated])

    const onSubmit = data => {
        fetch(`https://frightful-fangs-32652.herokuapp.com/updateStatus/${bookedId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setIsUpdated(true)
                    reset();
                    history.push(redirect_uri)
                }
                else {
                    setIsUpdated(false)
                    reset();
                }
            })

    };
    return (
        <div>

            <Container>
                <Row>
                    <Col md={12} className="my-5">
                        <h2>Update approval: {bookedPackage.status}</h2>
                        <div className="d-flex justify-content-center">
                            <Form className="w-50" onSubmit={handleSubmit(onSubmit)}>
                                <Form.Control className="my-4" {...register("status")} placeholder="approved" required />
                                <Form.Control className="bg-success text-white" type="submit" />
                            </Form>
                        </div></Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateStatus;