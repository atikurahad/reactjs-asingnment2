import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import BgABout from '../component/BgABout';
import Importance from '../component/Importance';

const About = () => {
    return (
        <div>
             <Navbar/> 
             <BgABout /> 
             <Importance />
             <Footer/>
        </div>
    );
};

export default About;