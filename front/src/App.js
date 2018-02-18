import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import './App.css';

class App extends Component {
  render() {
    return <BrowserRouter>
        <nav>
          <Switch>
            <header>
              <NavLink exact to="/" activeClassName="selected">
                Home
              </NavLink>
              <br/>
              <NavLink to="/admin" activeClassName="selected">
                Admin
              </NavLink>
            </header>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </nav>
      </BrowserRouter>;
  }
}

export default App;


