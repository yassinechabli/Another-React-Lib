import React from "react";
import "./GhostButton.css";

const GhostButton = props => {
  const { buttonColor, text, size, styles, handleClick } = props;
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`${buttonColor} ${size} ghost-button`}
    >
      {text}
    </button>
  );
};

GhostButton.defaultProps = {
  buttonColor: "blue",
  text: "Text goes here",
  size: "small",
  styles: {},
  handleClick: () => {}
};

export default GhostButton;
