import ContentPaper from "../UI/ContentPaper";
import TextRenderer from "../UI/TextRenderer";
import classes from './About.module.css';

const About: React.FC = () => {
    
    
    return (
        <ContentPaper injectedStyle={{ marginTop: '3em' }} className={classes.content}>
            <h1>My About Page</h1>
            <p>This is my about page.</p>
        </ContentPaper>
    );
};

export default About;