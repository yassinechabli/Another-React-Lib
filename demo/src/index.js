import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'
import Button from '../../src/Button/Button';
import { Navbar, NavItems } from "../../src"

class Demo extends Component {


  render() {
    return (
      <div>
        <Navbar theme="">
          <Navbar.Brand>
            <span>MYBRAND</span>
          </Navbar.Brand>
          <NavItems>
            <NavItems.Item text="Item1" />
            <NavItems.Item text="Item2" />
            <NavItems.Item text="Item3" />
            <NavItems.Item text="Item4" />
            <NavItems.Item text="Item5" />
            <NavItems.Item text="Item6" />
            <NavItems.Item text="Item7" />
            <NavItems.Item text="Item8" />
            <NavItems.Item text="Item9" />
            <NavItems.Item text="Item10" />
{/*             <NavItems.Item text="Item11" />
            <NavItems.Item text="Item12" />
            <NavItems.Item text="Item13" /> */}
          </NavItems>
        </Navbar>
        <Button
          text={'best button ever'} size='medium' styles={{ color: 'white' }} buttonColor='blue'
          handleClick={() => alert('hello world')}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
