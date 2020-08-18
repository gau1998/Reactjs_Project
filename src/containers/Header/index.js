import React from 'react';
import './style.scss';
import { AiOutlineRight } from 'react-icons/ai';

function Header() {
  return (
    <div className="container-fluid division">
      <ul className="nav breadcrumbs-course">
        <li className="nav-item">
          <a className="nav-link " href="#">
            Courses
            <AiOutlineRight size="25px" color="silver" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Physics
            <AiOutlineRight size="25px" color="silver" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            NOC Optical Sensors(video)
            <AiOutlineRight size="25px" color="silver" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Syllabus
            <AiOutlineRight size="25px" color="silver" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Co-ordinated:Prespicto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
