import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import navImg from '../../images/travele-img.png'

const Header = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className="w-75" src={navImg} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link>}
                        {user.email && <Nav.Link as={Link} to="/manageAllBookings">All Bookings</Nav.Link>}
                        {user.email && <Nav.Link as={Link} to="/myBooking">My Booking</Nav.Link>}
                        {user.email ? <Button onClick={handleLogOut}>Logout</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}


                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;