import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import {
  Avatar,
  Button,
  Collapse,
  Dropdown,
  FlatButton,
  Form,
  GhostButton,
  LoadingButton,
  ProgressBar,
  Profile,
  Tabs,
  Tab,
  Radio,
  RadioGroup,
  SimpleRedButton,
  SocialIcon,
  Searchbar,
  TwitterShare,
  Header,
  ExtendedText,
  Checkbox,
  Switch,
  Notification,
  StickyButton,
  Datepicker,
  DeleteButton,
  Reaction
} from "../../src/index";

const Tab1 = () => {
  return <div>Tab1</div>;
};

const Tab2 = () => {
  return <div>Tab2</div>;
};


class Demo extends Component {

  handleOnChange=(event)=>{
    alert('you selected ', event.target.value);

  render() {
    const items = ["One", "Two", "Three"];
    const handleChange1 = () => {
      console.log("abcd");
    };

    let options = [
      {
        id: 1,
        label: "Cat"
      },
      {
        id: 2,
        label: "Dog"
      },
      {
        id: 2,
        label: "Monkey"
      }
    ];

    return (
      <div>
        <h2>Avatar Component</h2>
        <Avatar src="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png" />
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
        <h2>Collapse Component</h2>
        <Collapse collapseHeader={"Click me"} collapseBody={"Sup, dude!"} />
        <br />
        <h2>Dropdown Component</h2>
        <Dropdown menuItems={items} onItemClick={this.handleItemClick} />
        <br />
        <h2>Extended Text Component</h2>
        <ExtendedText
          characterAmount={10}
          text={
            "This is sample display text that can be expanded to view in its entirety by clicking read more."
          }
        />
        <br />
            
      	<h2>Delete Button</h2>
        <DeleteButton text={'best button ever'} size='small' buttonColor='red' handleClick = {() => alert('Delete Item?')} />
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
        <h2>Form Component</h2>
        <Form fields={["input", "textarea", "button"]} />
        <br />
        <h2>Ghost Button</h2>
        <GhostButton
          buttonColor="red"
          text={"Spooky Button"}
          size="small"
          handleClick={() => alert("Boo!")}
        />
        <br />
        <GhostButton
          buttonColor="green"
          text={"Spooky Button"}
          size="small"
          handleClick={() => alert("Boo!")}
        />
        <br />
        <h2>Header Component</h2>
        <Header brandName={"My Awesome Site"} />
        <br />
        <h2>Loading Button Component</h2>
        Loading =
        <LoadingButton loading={true} />
        <br />
        Not Loading =
        <LoadingButton />
        <br />
        <h2>Notification</h2>
        <Notification number={10} color={"red"} />
        <h2>Profile Component</h2>
        <Profile
          name={"Joshua"}
          image={{
            sourceType: "url",
            location:
              "https://avatars2.githubusercontent.com/u/52901917?s=88&v=4"
          }}
          bio={"Full Stack Engineer"}
          link={{
            source: "https://github.com/Joshua-Burleson",
            text: "GitHub"
          }}
          socials={[
            { name: "facebook", source: "https://www.facebook.com/zuck" }
          ]}
        />
        <br />
        <h2>Progress Bar Component</h2>

        <ProgressBar
          progress={9}
          fillColor={"red"}
          containerClassName="container-style"
          containerStyle={{
            justifyContent: "center",
            height: 50,
            borderRadius: 0,
            borderWidth: 1,
            borderColor: "black"
          }}
        />


      </div>
    );

  }
}

render(<Demo />, document.querySelector('#demo'))

