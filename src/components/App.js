import React, { Component } from 'react';
import './../App.css';
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Home} from "./Home";
import {User} from "./User";
import {Root} from "./Root";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root} >
          <IndexRoute component={Home} />
          <Route path={"user"} component={User}/>
          <Route path={"home"} component={Home}/>
        </Route>
        <Route path={"home-single"} component={Home}/>
      </Router>
    );
  }
}

export default App;
