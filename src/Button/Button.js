import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = props => {
  let { buttonColor, text, size, styles, handleClick } = props;
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`button ${buttonColor} ${size}`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  buttonColor: "red",
  text: "Text goes here",
  size: "small",
  styles: {},
  handleClick: () => {}
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  styles: PropTypes.object,
  handleClick: PropTypes.func
};

export default Button;
