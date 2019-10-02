import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Switch.css'

const Switch = ({ value, checked, onClick }) => {  
  function handleClick(event) {
    onClick(event.target.checked, event)
  }

  return (
    <label className="switch">
      <input type="checkbox" defaultChecked={checked} checked={checked} onChange={handleClick}/>
      <span className="slider"/>
      { value && <p>{value}</p> }
    </label>
  ) 
}

Switch.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

Switch.defaultProps = {
  value: undefined,
}

export default Switch