import React, { Component } from 'react';
import './../App.css';

import {Root} from "./Root";
import {Home} from "./Home";

class App extends Component {
  render() {
    return (
      <Root>
        <Home></Home>
      </Root>
    );
  }
}

export default App;
