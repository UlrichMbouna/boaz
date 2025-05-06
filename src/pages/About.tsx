import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <h1>About Page</h1>
            <p>Welcome to the About page. This is where you can learn more about us.</p>
        </div>
    );
};

export default About;