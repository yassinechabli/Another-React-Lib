import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import {
  Button,
  Collapse,
  FlatButton,
  Form,
  Profile,
  Tabs,
  Tab,
  Radio,
  RadioGroup,
  TwitterShare,
  Header,
  ExtendedText,
  SearchBar,
  Switch,
  List
} from "../../src/index";

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

        <SearchBar></SearchBar>

        <br />
        <ExtendedText
          characterAmount={10}
          text={
            "This is sample display text that can be expanded to view in its entirety by clicking read more."
          }
        />


        <h2>Share on Twitter</h2>
        <TwitterShare message="Hi" size="md" />

        <h2>Form Component</h2>
        <Form fields={["input", "textarea", "button"]} />

        <h2>List Component</h2>
        <List listItems={[{content: "Item1", height: 50, background: '#345995'}, 
              {content: "Item2", height: 50, background: '#03CEA4'}, 
              {content: "Item3", height: 50, background: '#FB4D3D'}]} >
        </List>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

