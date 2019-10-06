import React, { Component } from "react";
import { render } from "react-dom";

import { Button } from "../../src/index";

import ExtraOptions from "../../src/ExtraOptions/ExtraOptions";

class Demo extends Component {
  render() {
    return (
      <div>
        <h2>
          Please feel free to use this file to experiment with components.
           However, do not push any changes to this file.
         </h2>


        <h4>Example of a component</h4>
        <Button buttonColor="blue" />


      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

