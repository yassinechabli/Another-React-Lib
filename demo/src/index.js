import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'

import Button from '../../src/Button/Button';
import FlatButton from '../../src/FlatButton/FlatButton';

class Demo extends Component {


  render() {
    return(
      <div>
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
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'))

