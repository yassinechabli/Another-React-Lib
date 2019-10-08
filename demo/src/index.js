import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import {
  AlertWrapper,
  Avatar,
  Button,
} from "../../src/index";


class Demo extends Component {
  render() {
    return (
      <div>
        <h2>
          Please feel free to use this file to experiment with components.
          However, do not push any changes to this file.
        </h2>

        <h3>Example components</h3>
        
        <h4>Alert Wrapper</h4>
        <AlertWrapper alertMsg="Example alert message"/>

        <h4>Avatar</h4>
        <Avatar />

        <h4>Button</h4>
        <Button />


      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
