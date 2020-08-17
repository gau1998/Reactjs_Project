import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import history from './history';
import './App.css';

const Dashboard = Loadable({
  loader: () =>
    import(/* webpackChunkName: "dashboard" */ './containers/Dashboard').catch(
      '',
    ),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});
const Register = Loadable({
  loader: () =>
    import(/* webpackChunkName: "register" */ './containers/Register').catch(
      '',
    ),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});
const Login = Loadable({
  loader: () =>
    import(/* webpackChunkName: "login" */ './containers/Login').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});
const Logout = Loadable({
  loader: () =>
    import(/* webpackChunkName: "logout" */ './containers/Logout').catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
