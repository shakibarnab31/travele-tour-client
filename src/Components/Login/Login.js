import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { user, setUser, setError, setIsLoading, signInWithGoogle } = useAuth();

    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <Container className="mx-auto">
                <Row >
                    <Col className="mt-5 pt-5" md={6} sm={12} >
                        <h2 className="mb-5">Please login</h2>
                        <div className="border p-5 w-75 mx-auto" >
                            <Button onClick={handleGoogleSignIn}>Signin With Google</Button>

                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src="https://i.ibb.co/nk0jCFX/login.jpg" className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;