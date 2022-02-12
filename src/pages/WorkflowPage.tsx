import TheWorkflow from "../components/the-workflow/TheWorkflow";
import bgPhoto from '../NotMine.png';
import classes from './WorkflowPage.module.css';

const WorkflowPage: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url(${bgPhoto})` }} className={classes.bg}>
            <TheWorkflow />
        </div>
    )
};

export default WorkflowPage;