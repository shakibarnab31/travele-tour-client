import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import Packages from '../Packages/Packages';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;