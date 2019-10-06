import React from "react";
import PropTypes from "prop-types";
import "./DeleteButton.css";

const DeleteButton = props => {
  let { buttonColor, text, size, styles, handleClick } = props;
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`${buttonColor} ${size} button delete-button`}
    >
      {text}
    </button>
  );
};

DeleteButton.defaultProps = {
  buttonColor: "red",
  text: "e",
  size: "small",
  styles: {},
  handleClick: () => {}
};

DeleteButton.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  styles: PropTypes.object,
  handleClick: PropTypes.func
};

export default DeleteButton;
