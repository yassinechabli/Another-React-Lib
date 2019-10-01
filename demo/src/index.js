import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'
import Button from '../../src/Button/Button'
import Avatar from '../../src/Avatar/Avatar'

class Demo extends Component {
  render () {
    return (
      <div>
        <Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />
        <Button
          text={'best button ever'}
          size='medium'
          styles={{ color: 'white' }}
          buttonColor='blue'
          handleClick={() => alert('hello world')}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
