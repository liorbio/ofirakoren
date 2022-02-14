import React from 'react';
import classes from './ContactPage.module.css';
import bgPhoto from '../NotMine.png';
import Contact from '../components/contact/Contact';

const ContactPage: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url(${bgPhoto})` }} className={classes.bg}>
            <Contact />
        </div>
    )
};

export default ContactPage;