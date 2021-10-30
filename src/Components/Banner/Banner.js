import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner" >
            <Container>
                <div className="d-flex ">
                    <div className="banner-title text-start">
                        <h1>TRAVELE</h1>
                        <h1>Take a break</h1>
                        <h1>Explore the world</h1>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;