import React from 'react';
import About from '../components/about/About';
import classes from './AboutPage.module.css';
import bgPhoto from '../NotMine.png';

const AboutPage: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url(${bgPhoto})` }} className={classes.bg}>
            <About />
        </div>
    )
};

export default AboutPage;