import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import './Style.scss';
const ModuleComponent = Loadable({
  loader: () => import(/* webpackChunkName: "header" */ '../Module').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});
const Navbar = Loadable({
  loader: () => import(/* webpackChunkName: "header" */ '../Navbar').catch(''),
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
    import(/* webpackChunkName: "header" */ '../Lectures').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});

class Main extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('Token');
    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }
    this.state = {
      loggedin: '',
    };
  }
  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
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
}

export default Main;
