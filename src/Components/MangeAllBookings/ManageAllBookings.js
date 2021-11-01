import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageAllBookings.css'

const ManageAllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://frightful-fangs-32652.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [control])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this?');
        if (proceed) {
            fetch(`https://frightful-fangs-32652.herokuapp.com/deleteBooking/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setControl(!control);
                    }
                    else {
                        setControl(false);
                    }
                })
        }
    }

    return (
        <div className="all-bookings">
            <Container className="pb-5">
                <h2 className="py-5">All Bookings</h2>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Package</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Approve</th>

                        </tr>
                    </thead>
                    {allBookings.map((singleBooking, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{index}</td>
                                <td>{singleBooking.name}</td>
                                <td>{singleBooking.email}</td>
                                <td>{singleBooking.packageName}</td>
                                <td>{singleBooking.address}</td>
                                <td>{singleBooking.city}</td>
                                <td>{singleBooking.phone}</td>
                                <td>{singleBooking.status}</td>
                                <td><Button className="bg-danger" onClick={() => handleDelete(singleBooking._id)}>Delete</Button></td>
                                <td><Link to={`/updateStatus/${singleBooking._id}`}><Button>Approved</Button></Link></td>
                            </tr>
                        </tbody>

                    ))}

                </Table>
            </Container>

        </div>
    );
};

export default ManageAllBookings;