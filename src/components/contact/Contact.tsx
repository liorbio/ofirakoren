import ContentPaper from "../UI/ContentPaper";
import TextRenderer from "../UI/TextRenderer";
import classes from './Contact.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact: React.FC = () => {
    
    
    return (
        <ContentPaper injectedStyle={{ marginTop: '3em' }} className={classes.content}>
            <p dir="rtl" className={classes.hebrew}>טלפון: 050-3535197</p>
            <p dir="rtl" className={classes.hebrew}>אימייל: ofirakoren@gmail.com</p>
            <p dir="rtl" className={classes.hebrew}>שעות הפעילות: א'-ה'&nbsp;&nbsp;&nbsp; 8:30-16:30</p>
            <InstagramIcon />
            <FacebookIcon />
            <PinterestIcon />
        </ContentPaper>
    );
};

export default Contact;