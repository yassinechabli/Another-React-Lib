import React from 'react'
import './button.css'

/**
 * Simple Button
 * Render a button
 * E.g.:
 * ```html
 * <Button buttonColor='red' text='my button text' size='small' styles={} handleClick={() => yourClickFuctionHere()} />
 * ```
 */
const Button = props => {
  let { buttonColor, text, size, styles, handleClick } = props
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`${buttonColor} ${size} button`}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  /**
   * Button color. Can be any valid color
   */
  buttonColor: 'red',
  text: 'Text goes here',
  /**
   * Button size. Possible values can by ['small', 'medium', 'large']
   */
  size: 'small',
  styles: {},
  /**
   * OnClick event handler
   */
  handleClick: () => {}
}

export default Button
