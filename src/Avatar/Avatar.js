import React from 'react'
import './Avatar.css'

/**
 * Render a rounded user avatar
 * E.g.:
 * ```html
 * <Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />
 * ```
 */
const Avatar = props => {
  const { src, alt } = props

  return <img src={src} className='img-avatar' alt={alt} />
}

export default Avatar
