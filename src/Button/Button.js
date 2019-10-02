import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = props => {
  let { buttonColor, disabled, text, size, styles, handleClick } = props;
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`button ${buttonColor}-button ${size}-button`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  buttonColor: "red",
  disabled: false,
  text: "Text goes here",
  size: "small",
  styles: {},
  handleClick: () => {}
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  styles: PropTypes.object,
  handleClick: PropTypes.func
};

export default Button;
