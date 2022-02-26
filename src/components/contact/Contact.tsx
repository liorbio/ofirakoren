import ContentPaper from "../UI/ContentPaper";
import TextRenderer from "../UI/TextRenderer";
import classes from './Contact.module.css';

import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
    
    
    return (
        <ContentPaper injectedStyle={{ marginTop: '3em' }} className={classes.content}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
            
            </div>
            <p className={classes.details}>Tel/WhatsApp: 050-3535197</p>
            <div style={{ width: "50%", borderBottom: "3px dotted #959595"}}></div>
            <ContactForm />
        </ContentPaper>
    );
};

export default Contact;