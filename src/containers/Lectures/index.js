import React from "react";
import "./Style.scss";
// import ReactPlayer from "react-player";

function LectureComponent() {
  return (
    <div>
      <div>
        <ul className="nav nav-tabs video-tabs">
          <li>
            <a data-toggle="tab" href="#watch" id='#abcd' aria-expanded="true">
              Watch on YouTube
            </a>
          </li>
          <li>
            <a data-toggle="tab"  href="#watch">
              Video
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#watch">
              Assignments
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#watch">
              Download Videos
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#watch">
              Books
            </a>
          </li>
        </ul>
      </div>
      <div>
      {/*<ReactPlayer
      id='#abcd'
        width="650px"
        height="400px"
        controls
        url="https://www.youtube.com/watch?v=UF3QPLL_4ts"
      />*/}
      
  </div>
  </div>
  );
}

export default LectureComponent;
