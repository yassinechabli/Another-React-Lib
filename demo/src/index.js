import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'
import Button from '../../src/Button/Button'
import Avatar from '../../src/Avatar/Avatar'
import SocialIcon from '../../src/SocialIcon/SocialIcon'
class Demo extends Component {
  render () {
    return (
      <div>
        <SocialIcon name='instagram' size='lg' />
        <SocialIcon name='instagram' size='md' />
        <SocialIcon name='instagram' size='sm' />
        <SocialIcon name='facebook' size='lg' />
        <SocialIcon name='twitter' size='lg' />
        <SocialIcon name='pinterest' size='lg' />
        <SocialIcon name='telegram' size='lg' />
        <SocialIcon name='whatsapp' size='lg' />
        <SocialIcon name='other' size='lg' />
        <Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />
        <Avatar />
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
