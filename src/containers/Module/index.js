import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import bg from '../../image/avatar1.jpg';
import './style.scss';

const Accordion = withStyles({
  root: {
    opacity: 1,
    listStyle: 'bold',
    scrollBehavior: 'true',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },

  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgb(243, 243, 243)',
    fontSize: '35 ',
    minHeight: 56,
    '&$expanded': {
      borderLeft: '5px solid blue',
      backgroundColor: 'white',
      marginLeft: '0 !important',
    },
  },
  content: {
    '&$expanded': {},
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(243, 243, 243)',
    padding: theme.spacing(2.5),
  },

  content: {
    marginBottom: 0,
    justifyContent: 'space-between',
  },
}))(MuiAccordionDetails);

const ModuleComponent = (props) => {
  const [expanded, setExpanded] = useState('');
  const [selectedLecture, updateLecture] = useState('');
  const { tutorialDetail, getLectures } = props;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setExpanded(
      tutorialDetail &&
        tutorialDetail.module &&
        tutorialDetail.module[0] &&
        tutorialDetail.module[0].moduleTitle,
    );
    updateLecture(
      tutorialDetail[0] &&
        tutorialDetail[0].lectures &&
        tutorialDetail[0].lectures[0] &&
        tutorialDetail[0].lectures[0]._id,
    );
    getLectures({
      lectureId:
        tutorialDetail[0] &&
        tutorialDetail[0].lectures &&
        tutorialDetail[0].lectures[0] &&
        tutorialDetail[0].lectures[0]._id,
    });
  }, []);

  const changeLecture = ({ lectureId }) => {
    getLectures({ lectureId, tabChange: true });
    updateLecture(lectureId);
  };

  return (
    <div className="  haha">
      <div>
        <img className="dwrapper" src={bg} alt="bg" />
      </div>
      <div className="wrapper">
        {tutorialDetail &&
          tutorialDetail.map((tutorial) => (
            <Accordion
              square
              expanded={expanded === tutorial.module.moduleTitle}
              onChange={handleChange(tutorial.module.moduleTitle)}>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header">
                <Typography>{tutorial.module.moduleTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div >
                  {tutorial.lectures &&
                    tutorial.lectures.map((lecture) => (
                      <Typography
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                          opacity: '0.5',
                          
                        }}
                        onClick={() =>
                          changeLecture({ lectureId: lecture._id })
                        }>
                        {lecture.title}
                      </Typography>
                    ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </div>
  );
};
export default ModuleComponent;
