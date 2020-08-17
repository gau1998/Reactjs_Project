import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import './Style.scss';
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
const Header = Loadable({
  loader: () => import(/* webpackChunkName: "header" */ '../Header').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});
const LectureComponent = Loadable({
  loader: () =>
    import(/* webpackChunkName: "lecture" */ '../Lectures').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});

const Dashboard =()=>{

  return (
    <div>
      <Navbar />
      <hr />
      <div className="row left ">
        <div className="col-3 leftside">
          <ModuleComponent />
        </div>
        <div className="col">
          <Header />
          <LectureComponent />
        </div>
      </div>
      <Link to="/logout" />
    </div>
  );
}

export default Dashboard;
