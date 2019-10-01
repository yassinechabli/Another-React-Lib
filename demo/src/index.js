import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'

import Button from '../../src/Button/Button';
import Form from "../../src/Form/Form";

import FlatButton from '../../src/FlatButton/FlatButton';

import Collapse from '../../src/Collapse/Collapse';

import Tabs from '../../src/Tabs/Tabs';
import Tab from '../../src/Tabs/Tab';

const Tab1 = () => {
  return <div>Tab1</div>
}

const Tab2 = () => {
  return <div>Tab2</div>
}



class Demo extends Component {


  render() {
    return(
      <div>
        <Collapse collapseHeader={'Click me'} collapseBody={'Sup, dude!'}/>
        <br />
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

