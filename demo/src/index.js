import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'

import Button from '../../src/Button/Button';
import Form from "../../src/Form/Form";

import FlatButton from '../../src/FlatButton/FlatButton';
import Tabs from '../../src/Tabs/Tabs';
import Tab from '../../src/Tabs/Tab';

import Switch from '../../src/Switch/Switch'

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
    return(
      <div>
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
        <br />
        <br />
        <Button text={'best button ever'} size='medium' styles={{color:'white'}} buttonColor='blue' handleClick = {() => alert('hello world')} />
        <br />
        <br />
        <br />
        <h1>Flat Buttons</h1>
        <FlatButton text={'best button ever'} size='small' buttonColor='red' handleClick = {() => alert('Flatted world')} />
        <br />
        <br />
        <FlatButton text={'best button ever'} size='small' buttonColor='green' handleClick = {() => alert('Flatted world')} />
        <br />
        <br />
        <FlatButton text={'best button ever'} size='small' buttonColor='blue' handleClick = {() => alert('Flatted world')} />
        <br />
        <br />
        <FlatButton text={'best button ever'} size='small' buttonColor='grey' handleClick = {() => alert('Flatted world')} />
        <br />
        <br />
        <FlatButton text={'best button ever'} size='small' buttonColor='black' handleClick = {() => alert('Flatted world')} />
        <br/>
        <Tabs defaultTab={0}>
          <Tab component={Tab1} title="Default Tab"/>
          <Tab component={Tab2} title="Tab 2"/>
        </Tabs>
      </div>
    );

  }
}

render(<Demo />, document.querySelector('#demo'))

