import React, { Component } from 'react'
import { render } from 'react-dom'

import {Button, FlatButton, Form, Profile, SimpleRedButton } from '../../src/index';


class Demo extends Component {


  render() {
    return <div>
     <Button 
     text={'best button ever'} size='medium' styles={{color:'white'}} buttonColor='blue'
     handleClick = {() => alert('hello world')}
     />
     <Form fields={["input", "textarea", "button"]} />
     <Profile name={'Joshua'} image = {{sourceType: 'url', location: 'https://avatars2.githubusercontent.com/u/52901917?s=88&v=4'}}
         bio={'Full Stack Engineer'} link={{source: 'https://github.com/Joshua-Burleson', text: 'GitHub'}} socials = {[{name: 'facebook', source: 'https://www.facebook.com/zuck'}]}/>
    </div>



  }
}

render(<Demo />, document.querySelector('#demo'))

