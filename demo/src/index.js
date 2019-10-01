import React, { Component } from "react";
import { render } from "react-dom";

import SimpleRedButton from "../../src/SimpleRedButton/SimpleRedButton";
import GhostButton from "../../src/GhostButton/GhostButton";
import Button from "../../src/Button/Button";

class Demo extends Component {
  render() {
    return (
      <div>
        <Button
          text={"best button ever"}
          size="medium"
          styles={{ color: "white" }}
          buttonColor="blue"
          handleClick={() => alert("hello world")}
        />
        <GhostButton
          text={"cool ghost button"}
          size="small"
          styles={{ color: "#4dcec4" }}
          buttonColor="green"
          handleClick={() => alert("cool ghost button clicked")}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
