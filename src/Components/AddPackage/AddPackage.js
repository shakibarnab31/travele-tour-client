import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        let addPackage = data;
        let attraction = [];
        let attraction1 = {};
        attraction1.place = data.firstAttraction;
        attraction1.images = data.firstImages;
        let attraction2 = {};
        attraction2.place = data.secondAttraction;
        attraction2.images = data.secondImages;
        let attraction3 = {};
        attraction3.place = data.thirdAttraction;
        attraction3.images = data.thirdImages;
        let attraction4 = {};
        attraction4.place = data.fourthAttraction;
        attraction4.images = data.fourthImages;
        attraction.push(attraction1);
        attraction.push(attraction2);
        attraction.push(attraction3);
        attraction.push(attraction4);

        addPackage.attraction = attraction;
        fetch('http://localhost:5000/addPackage', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addPackage)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package Successfully Added')
                    reset();
                }
            })
    };
    return (
        <div>

            <Container>
                <Row>
                    <h2 className="mt-5 mb-4">Please Add Package</h2>
                    <Col>
                        <Form onSubmit={handleSubmit(onSubmit)} className="mx-5">
                            <Form.Control className="mb-3" {...register("name")} type="name" placeholder="Package Name" />
                            <Form.Control className="mb-3" {...register("location")} type="text" placeholder="location" />
                            <Form.Control className="mb-3" type="text" as="textarea" {...register("description")} cols="30" rows="4" placeholder="description" />
                            <Form.Control className="mb-3" {...register("price")} type="number" placeholder="Price" />
                            <Form.Control className="mb-3" {...register("img")} type="text" placeholder="Image url" />
                            <Form.Control className="mb-3" {...register("firstAttraction")} type="text" placeholder="firstAttraction" />
                            <Form.Control className="mb-3" {...register("firstImages")} type="text" placeholder="firstImages url" />
                            <Form.Control className="mb-3" {...register("secondAttraction")} type="text" placeholder="secondAttraction" />
                            <Form.Control className="mb-3" {...register("secondImages")} type="text" placeholder="secondImages url" />
                            <Form.Control className="mb-3" {...register("thirdAttraction")} type="text" placeholder="thirdAttraction" />
                            <Form.Control className="mb-3" {...register("thirdImages")} type="text" placeholder="thirdImages url" />
                            <Form.Control className="mb-3" {...register("fourthAttraction")} type="text" placeholder="fourthAttraction" />
                            <Form.Control className="mb-3" {...register("fourthImages")} type="text" placeholder="fourthImages url" />

                            <Form.Control className="mb-3 bg-info text-white" type="submit" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddPackage;