import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import bg from '../../image/avatar1.jpg';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
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
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const ModuleComponent = (props) => {
  const [expanded, setExpanded] = useState('');
  const [selectedLecture, updateLecture] = useState('')
  const{tutorialDetail, getLectures} = props
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(()=>{
    setExpanded(tutorialDetail && tutorialDetail.module &&  tutorialDetail.module[0] &&  tutorialDetail.module[0].moduleTitle)
    updateLecture(tutorialDetail[0] && 
      tutorialDetail[0].lectures &&  tutorialDetail[0].lectures[0] && tutorialDetail[0].lectures[0]._id)
    getLectures({lectureId:tutorialDetail[0] && 
      tutorialDetail[0].lectures &&  tutorialDetail[0].lectures[0] && tutorialDetail[0].lectures[0]._id})
  },[])

  const changeLecture=({lectureId})=>{
    getLectures({lectureId, tabChange:true})
    updateLecture(lectureId)
  }


  return (
    <div>
      <div>
        <img className="dwrapper" src={bg} alt="bg image" />
      </div>
      <div className="wrapper">
        {tutorialDetail && tutorialDetail.map(tutorial=>(
          <Accordion
            square
            expanded={expanded === tutorial.module.moduleTitle}
            onChange={handleChange(tutorial.module.moduleTitle)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{tutorial.module.moduleTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="lectureName" >
              {tutorial.lectures && tutorial.lectures.map(lecture=>(<Typography onClick={()=>changeLecture({lectureId:lecture._id})}>{lecture.title}</Typography>))}
              </div>
            </AccordionDetails>
          </Accordion>))}
      </div>
    </div>
  );
};
export default ModuleComponent;
