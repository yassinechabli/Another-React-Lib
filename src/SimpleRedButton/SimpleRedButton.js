import React from 'react'
import './simpleredbutton.css'

const SimpleRedButton = (props) => {
    return(<button className="red-button" onClick={props.handleClick}>
        {props.text}
    </button>)
}

SimpleRedButton.defaultProps = {
    text: "Click here",
    handleClick: () => {}
  };
  
export default SimpleRedButton