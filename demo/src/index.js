import React, {Component} from 'react'
import {render} from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'
import Button from '../../src/Button/Button';

class Demo extends Component {


  render() {
    return <div>
     <Button 
     text={'best button ever'} size='medium' styles={{color:'white'}} buttonColor='blue'
     handleClick = {() => alert('hello world')}
     />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
