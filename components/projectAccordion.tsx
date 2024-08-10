import React from 'react';
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, AccordionActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProjectAccordionProps {
    bgColor: string;
    titleColor: string;
    textColor: string;
    title: string;
    content: React.ReactNode;
}

const ProjectAccordion: React.FC<ProjectAccordionProps>  = ({ bgColor,titleColor, textColor, title, content }) => (
    <Accordion className={`!${bgColor} !${textColor} p-2`}>
        <AccordionSummary
            className={`!text-lg !${titleColor} font-black`}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${title}-content`}
            id={`${title}-header`}
        >
            {title}
        </AccordionSummary>
        <AccordionDetails>
            {content}
        </AccordionDetails>
    </Accordion>
);

export default ProjectAccordion;
