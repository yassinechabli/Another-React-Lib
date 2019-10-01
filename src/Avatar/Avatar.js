import React from 'react'
import './Avatar.css'

const Avatar = props => {
  const { src, alt } = props

  return <img src={src} className='img-avatar' alt={alt} />
}

export default Avatar
