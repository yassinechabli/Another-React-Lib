import React, { Component } from "react";
import { render } from "react-dom";

import SimpleRedButton from "../../src/SimpleRedButton/SimpleRedButton";

import Button from "../../src/Button/Button";
import Form from "../../src/Form/Form";

import FlatButton from "../../src/FlatButton/FlatButton";
import { Radio, RadioGroup } from "../../src/RadioButton/radio";

import Collapse from "../../src/Collapse/Collapse";

import Tabs from "../../src/Tabs/Tabs";
import Tab from "../../src/Tabs/Tab";

import Login from "../../src/Login/Login";

const Tab1 = () => {
  return <div>Tab1</div>;
};

const Tab2 = () => {
  return <div>Tab2</div>;
};

class Demo extends Component {
  render() {
    const handleChange = () => {
      console.log("abcd");
    };
    return (
      <div>
        <h2>
          Please feel free to use this file to experiment with components.
          However, do not push any changes to this file.
        </h2>

        <h4>Example of a component</h4>
        <Button buttonColor="blue" />

        <Collapse collapseHeader={"Click me"} collapseBody={"Sup, dude!"} />
        <br />
        <h2>Button Component</h2>
        <Button
          text={"best button ever"}
          size="medium"
          styles={{ color: "white" }}
          buttonColor="blue"
          handleClick={() => alert("hello world")}
        />
        <br />
        <h2>Flat Buttons</h2>
        <FlatButton
          text={"best button ever"}
          size="small"
          buttonColor="red"
          handleClick={() => alert("Flatted world")}
        />
        <br />
        <FlatButton
          text={"best button ever"}
          size="small"
          buttonColor="green"
          handleClick={() => alert("Flatted world")}
        />
        <br />

        <h2>Tab Component</h2>
        <Tabs defaultTab={0}>
          <Tab component={Tab1} title="Default Tab" />
          <Tab component={Tab2} title="Tab 2" />
        </Tabs>

        <h2>Radio Buttons </h2>
        <RadioGroup name="xx" selectedValue="Orange" onChange={handleChange}>
          <Radio value="Orange" />
          <Radio value="Apple" />
        </RadioGroup>

        <Login
          onSubmit={e => {
            e.preventDefault();
            console.log("Logged in for awesomeness");
          }}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
