import React, {useState, useEffect} from 'react';
import './Style.scss';
// import ReactPlayer from "react-player";

function LectureComponent(props) {
  const [tab, updateTab] =useState("watchVideo")
  const {sourceDetail, tabChanged, setTabChanged} =props
  useEffect(()=>{
    if(tabChanged){
      updateTab("watchVideo")
      setTabChanged(false)
    }
  },[tabChanged])
  return (
    <div>
      <div>
        <ul className="nav nav-tabs video-tabs">
          {/*<li>
            <a data-toggle="tab" href="#watch" id="#abcd" aria-expanded="true">
              Watch on YouTube
            </a>
          </li>*/}
          <li onClick={()=>updateTab("watchVideo")}>
            <a data-toggle="tab" href="#watch">
              Video
            </a>
          </li>
          <li onClick={()=>updateTab("assignments")}>
            <a  data-toggle="tab" href="#assignments">
              Assignments
            </a>
          </li>
          <li onClick={()=>updateTab("download")}>
            <a data-toggle="tab" href="#download">
              Download Videos
            </a>
          </li>
          <li onClick={()=>updateTab("books")}>
            <a data-toggle="tab" href="#books">
              Books
            </a>
          </li>
        </ul>
      </div>
      <div key={sourceDetail.videoUrl} className="lecture-box">
      {tab==="watchVideo"?<div style={{'width':"0em",'padding':'10px 15px'}}>
      <iframe width="570" height="380" src={sourceDetail.videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>:tab==="assignments"?<div>your pdf will be here</div>:
      tab==="download"?<div>you can download content here</div>:
      tab==="books"?<div>you can find books here</div>:''}
      </div>
    </div>
  );
}

export default LectureComponent;
