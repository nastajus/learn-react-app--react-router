import React from 'react';

import {Header} from "./Header";

/* used whenever Route uses Root, which is always, since "/" is included as top level*/
export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {/* always appears*/}
            <Header />
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {/* children getting loaded when link "User" and link "Home" clicked, or URL /user or /home loaded */}
            {/* finds this hook, loads the component off the sub-route */}
            {this.props.children}
            {/* aka conditionally appears, if {this.props.children} exists */}
          </div>
        </div>
      </div>
    )
  }
}