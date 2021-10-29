import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
                <Row>
                    <Col className="mt-5" >
                        <div >
                            <h2>plese login</h2>
                            <Button onClick={handleGoogleSignIn}>signin with Google</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;