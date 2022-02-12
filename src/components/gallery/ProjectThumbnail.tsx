import classes from './ProjectThumbnail.module.css';

const ProjectThumbnail: React.FC<{ name: string, coverPhoto: string }> = ({ name, coverPhoto }) => {
    
    return (
        <div style={{ backgroundImage: `url(${coverPhoto})` }} className={classes.thumbnail}>
            <div className={classes["project-name"]}>
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default ProjectThumbnail;