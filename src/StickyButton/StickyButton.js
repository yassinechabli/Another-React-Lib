import React from 'react';
import './button.css';

const StickyButton = (props) => {
    let { buttonColor, text, size, styles, handleClick, behavior } = props;
    return (
        <button
            style={styles}
            behavior={`${behavior}`}
            onClick={() => handleClick(behavior)}
            className={`${buttonColor} ${size} sticky-button`}
        >
            {text}
        </button>)
}

StickyButton.defaultProps = {
    buttonColor: 'red',
    text: 'Text goes here',
    size: 'small',
    styles: {},
    handleClick: (behavior) => {
        window.scrollTo({
            top: 0,
            behavior: behavior === null ? 'auto' : behavior
        });
    }
}

export default StickyButton;