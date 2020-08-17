import React from 'react';
import '../Navbar/Style.scss';
import { Link, Redirect } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { GoChevronDown } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiMore2Line } from 'react-icons/ri';
import { TiUser } from 'react-icons/ti';

function Navbar(props) {
  return (
    <div className="container-fluid fluid">
      <nav className="navbar navbar-expand-lg navbar-light  fun ">
        <a className="navbar-brand " href="#">
          <h3>
            Pers<span>pectico</span>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <li class="nav-item dropdown abcd">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <button className=" abcd">
              Explore <GoChevronDown />
            </button>
          </a>

          <div
            class="dropdown-menu singh"
            aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <form className="root">
          <input
            type="search"
            placeholder="what you want to learn ?"
            className="form-control"
          />
        </form>

        <div>
          <a href="">
            {' '}
            <FaSearch className="icon" color="blue" size="20px" />
          </a>
        </div>
        <div>
          <IoMdNotificationsOutline className="icon2" size="40" />
          <RiMore2Line className="icon3" size="40" />
        </div>
        <div>
          <li class="nav-item dropdown abcde">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <button className=" abcde">
                <TiUser size="40px" />
                Test User <GoChevronDown />
              </button>
            </a>
            <div
              class="dropdown-menu singh"
              aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
