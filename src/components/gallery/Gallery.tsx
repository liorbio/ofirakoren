import React, { useState } from 'react';
import ContentPaper from '../UI/ContentPaper';
import TextRenderer from '../UI/TextRenderer';
import classes from './Gallery.module.css';
import * as data from '../../texts/theWorkflow.json';
import photo1 from '../../NotMine.png';
import ProjectThumbnail from './ProjectThumbnail';
import { Carousel } from 'react-carousel-minimal';
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
const datum = [
    {
        image: photo1
    },
    {
        image: photo1
    },
    {
        image: photo1
    }
];

const Gallery: React.FC = () => {
    const [showProject, setShowProject] = useState<boolean>(false);

    const handleShowProject = () => {
        setShowProject(true);
    }

    return(
        <div className={!showProject ? classes.flexContainer : classes.flexContainer }>
            {!showProject && projects.map(project => <ProjectThumbnail key={project.id} onShowProject={handleShowProject} name={project.name} coverPhoto={project.coverPhoto} />)}
            {showProject && <>
                
                <Carousel
                data={datum}
                width="100vw"
                height="84vh"
                automatic={true}
                time={10000}
                thumbnails={true}
                thumbnailWidth="60vw"
                dots={true}
            />
            <div style={{ fontSize: "3em", display: "inline" }}>×</div>
            </>}
        </div>
    )
};

export default Gallery;