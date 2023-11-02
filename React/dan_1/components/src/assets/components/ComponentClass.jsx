import React, { Component } from "react";

export class ComponentClass extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        {user && <p>Hello Freunde!</p>}
        {!user && <p>Hello Foe!</p>}
      </div>
    );
  }
}

export default ComponentClass;
