import React from 'react'
import './button.css'

const Button = (props) => {
    let {buttonColor, text, size, styles, handleClick} = props;
    return(<button style={styles} onClick ={handleClick}
    className={`${buttonColor} ${size} button`}>
        {text}
    </button>)
}

Button.defaultProps = {
    buttonColor: "red",
    text:'Text goes here',
    size:'small',
    styles: {},
    handleClick: () => {}
}

export default Button