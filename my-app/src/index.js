import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Employees from './components/Employees/Employees'
import AddModifyEmployee from './components/Employees/AddModiyEmployees'
const routing = (
    <div className="parent-container">  
      <Router>
  
          <Switch>
            <Route exact path="/" component={Employees} />
            <Route exact path="/addModifyEmployee" component={AddModifyEmployee} />
          </Switch>
      </Router>
    </div>
  
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
