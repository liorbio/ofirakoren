import React from 'react';
import ContentPaper from '../UI/ContentPaper';
import TextRenderer from '../UI/TextRenderer';
import classes from './Gallery.module.css';
import * as data from '../../texts/theWorkflow.json';
import photo1 from '../../NotMine.png';
import ProjectThumbnail from './ProjectThumbnail';
const text = data;

// take array of projects:
// project: { id, name, coverPhoto }
const projects = [
    {
        id: 1,
        name: "Ramat Gan",
        coverPhoto: photo1
    },
    {
        id: 2,
        name: "Ramat Gan",
        coverPhoto: photo1
    },
    {
        id: 3,
        name: "Ramat Gan",
        coverPhoto: photo1
    }
];

const Gallery: React.FC = () => {
    return(
        <div className={classes.flexContainer}>
            {projects.map(project => <ProjectThumbnail key={project.id} name={project.name} coverPhoto={project.coverPhoto} />)}
        </div>
    )
};

export default Gallery;