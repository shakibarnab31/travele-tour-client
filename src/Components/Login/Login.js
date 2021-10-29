import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebse';
import './Login.css'

const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    const handleGoogleSignIn = () => {
        signInWithGoogle();
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