import React from 'react';
import Contact2 from './Contact2';
import Carousel from './Carousel';
import Advertisement from './Advertisement';
import './Navbarline.css';
import App from './Appdownload';
import Service from './Logo';
import Signup from './Signup';
import Form from './Form';
import Newgym from './Newgym';
import Blog from './Blog';
import './Home.css';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Contact2 />
            <Carousel />
            <Advertisement />
            <App />
            <Service />
            <Signup />
            <Form />
            <Newgym />
            <Blog />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Home;