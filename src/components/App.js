import React, { Component } from 'react';
import './../App.css';
import {Router, Route, browserHistory} from "react-router";

import {Home} from "./Home";
import {User} from "./User";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"user"} component={User} />
        <Route path={"home"} component={Home} />
      </Router>
    );
  }
}

export default App;
