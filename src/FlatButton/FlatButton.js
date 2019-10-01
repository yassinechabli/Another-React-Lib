import React from 'react';
import './button.css';

const FlatButton = (props) => {
    let {buttonColor, text, size, styles, handleClick} = props;
    return(
    <button style={styles} onClick ={handleClick} className={`${buttonColor} ${size} flat-button`}>
        {text}
    </button>)
}

FlatButton.defaultProps = {
    buttonColor: "red",
    text:'e',
    size:'small',
    styles: {},
    handleClick: () => {}
}

export default FlatButton;