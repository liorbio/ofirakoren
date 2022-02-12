import React from 'react';
import ContentPaper from '../UI/ContentPaper';
import TextRenderer from '../UI/TextRenderer';
import classes from './TheWorkflow.module.css';
import * as data from '../../texts/theWorkflow.json';
const text = data;

const TheWorkflow: React.FC = () => {
    return(
        <ContentPaper injectedStyle={{ marginTop: '3em' }} className={classes.content}>
            <h1>{text.englishTitle}</h1>
            <p><TextRenderer text={text.englishText} /></p>
        </ContentPaper>
    )
};

export default TheWorkflow;