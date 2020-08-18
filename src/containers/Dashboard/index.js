import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {func} from 'prop-types';
import { Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import './style.scss';
import {getCourseDetails, getTutorialDetails, getSources} from '../../actions'
const ModuleComponent = Loadable({
  loader: () => import(/* webpackChunkName: "module" */ '../Module').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});
const Navbar = Loadable({
  loader: () => import(/* webpackChunkName: "navbar" */ '../Navbar').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});
// const Header = Loadable({
//   loader: () => import(/* webpackChunkName: "header" */ '../Header').catch(''),
//   loading: () => '', // full page loader here
//   delay: 0, // delay in milliseconds, useful for suspense
// });
const LectureComponent = Loadable({
  loader: () =>
    import(/* webpackChunkName: "lecture" */ '../Lectures').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});

const Dashboard =(props)=>{
  const {dispatch, courseDetail, tutorialDetail, sourceDetail} = props
  const [tutorialId, updateTutorialId] =useState('')
  const [tabChanged, setTabChanged] = useState(false)
  useEffect(()=>{
    const {match:{params}}= props
    dispatch(getCourseDetails({perspecticoCourseId:params.id}))
  },[])
  useEffect(()=>{
    if(courseDetail && courseDetail._id){
      updateTutorialId(courseDetail.tutorialId)
      dispatch(getTutorialDetails({tutorialId: courseDetail.tutorialId}))
    }
  },[courseDetail])
  const getQuery = (state) => {
    let query = '';
    const elements = state;
    Object.keys(elements).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(elements, key)) {
        if (elements[key] != null) {
          // if(elements[key]){
          query += `${key}=${elements[key]}&`;
          // }
        }
      }
    });
    return query;
  };
  const getLectures=({lectureId, tabChange})=>{
    const query = getQuery({lectureId})
    dispatch(getSources(query))
    if(tabChange){
      setTabChanged(true)
    }
  }
  
  return (
    <div>
    <div>
      <Navbar {...props}/>
      
      <div className="row ">
        <div className="leftside col-3" >
          {tutorialDetail && tutorialDetail.length? <ModuleComponent {...props} getLectures={getLectures}/>:""}
        </div>
        <div className="col">
          {/*<Header />*/}
         {sourceDetail && sourceDetail._id?<LectureComponent {...props} tabChanged={tabChanged} setTabChanged={setTabChanged}/>: ""}
        </div>
      </div>
      <Link to="/logout" />
      </div>
    </div>
  );
}
Dashboard.propTypes={
  dispatch:func.isRequired,
}

function mapStateToProps(props) {
  return {
    ...props,
  };
}

export default connect(mapStateToProps)(Dashboard);

