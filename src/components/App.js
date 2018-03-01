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
        {/* problem #1: no default path, loading url root "/" doesn't show Header */}
        <Route path={"/"} component={Root} >

          {/* solution to p#1 */}
          <IndexRoute component={Home} />

          {/* works: loading url path "/user" or "/home" shows Header AND child component */}
          <Route path={"user"} component={User}/>
          <Route path={"home"} component={Home}/>
        </Route>

        {/* ordering does matter, will not arrive here, since already captured above */}
        <Route path={"home"} component={Home}/>

        {/* alternatively the following WON'T use the Root component */}
        <Route path={"home-single"} component={Home}/>

      </Router>
    );
  }
}

export default App;
