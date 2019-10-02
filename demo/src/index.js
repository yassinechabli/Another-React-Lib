import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
import {Button, Collapse, FlatButton, Form, Profile, SimpleRedButton, Tabs, Tab, Radio, RadioGroup, TwitterShare, Header } from '../../src/index';


const Tab1 = () => {
  return <div>Tab1</div>
}

const Tab2 = () => {
  return <div>Tab2</div>
}



class Demo extends Component {
  

  render() {
    const handleChange =  ()=> {
      console.log("abcd");
    };
    return(
      <div>
        <Header/>
        <h2>Collapse Component</h2>
        <Collapse collapseHeader={'Click me'} collapseBody={'Sup, dude!'}/>
        <br />
      
        <h2>Button Component</h2>
        <Button text={'best button ever'} size='medium' styles={{color:'white'}} buttonColor='blue' handleClick = {() => alert('hello world')} />
        <br />
      
        <h2>Flat Buttons</h2>
        <FlatButton text={'best button ever'} size='small' buttonColor='red' handleClick = {() => alert('Flatted world')} />
        <br />
        <FlatButton text={'best button ever'} size='small' buttonColor='green' handleClick = {() => alert('Flatted world')} />
        <br/>
          
        <h2>Profile Component</h2>
        <Profile name={'Joshua'} image = {{sourceType: 'url', location: 'https://avatars2.githubusercontent.com/u/52901917?s=88&v=4'}}
         bio={'Full Stack Engineer'} link={{source: 'https://github.com/Joshua-Burleson', text: 'GitHub'}} socials = {[{name: 'facebook', source: 'https://www.facebook.com/zuck'}]}/>
        
        <h2>Tab Component</h2>
        <Tabs defaultTab={0}>
          <Tab component={Tab1} title="Default Tab"/>
          <Tab component={Tab2} title="Tab 2"/>
        </Tabs>

        <h2>Radio Buttons </h2>
        <RadioGroup name="xx" selectedValue="Orange" onChange={handleChange}>
          <Radio value="Orange" /> 
          <Radio value="Apple" /> 
        </RadioGroup>

    <h2>Share on Twitter</h2>   
      <TwitterShare message="Hi" size="md"/>
      </div>

      <h2>Form Component</h2>
      <Form fields={["input", "textarea", "button"]} />
    );

  }
}

render(<Demo />, document.querySelector('#demo'))

