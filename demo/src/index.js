import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
import {Button, Collapse, FlatButton, Form, Profile, SimpleRedButton, Tabs, Tab, Radio, RadioGroup, TwitterShare, Header, ExtendedText, Searchbar, Switch } from '../../src/index';

const Tab1 = () => {
  return <div>Tab1</div>
}

const Tab2 = () => {
  return <div>Tab2</div>
}

class Demo extends Component {
  state = {
    checked: false,
  }

  handleChecked = () => {
    this.setState({ ...this.state, checked: !this.state.checked })
  }

  render() {
    const handleChange = () => {
      console.log("abcd");
    };
    
    return(
      <div>

     

        <Header/>
        <h2>Collapse Component</h2>
        <Collapse collapseHeader={'Click me'} collapseBody={'Sup, dude!'}/>
        <br />
      
         <Switch 
          value="Switch 1" 
          checked={!this.state.checked} 
          onClick={this.handleChecked}
        />
        <br />
        <br />
        <Switch 
          value="Switch 2" 
          checked={this.state.checked} 
          onClick={this.handleChecked}
        />
      
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


        <Searchbar></Searchbar>
   

        <br/>
        <ExtendedText characterAmount={10} text={'This is sample display text that can be expanded to view in its entirety by clicking read more.'} />


    <h2>Share on Twitter</h2>   
      <TwitterShare message="Hi" size="md"/>
        
      <h2>Form Component</h2>
      <Form fields={["input", "textarea", "button"]} />
          </div>

    );
  }
}

render(<Demo />, document.querySelector('#demo'))

