import React from "react";
import PropTypes from "prop-types";
import "./Spinner.css";

/**
 * Spinner
 * Renders a spinner
 * E.g.:
 * ```html
 * <Spinner size='sm' color='default' />
 * ```
 */
const Spinner = props => {
  let { size, color } = props;
  return (
    <div
      className={`spinner spinner--${size} spinner--${color}`}
    >
    </div>
  );
};

Spinner.defaultProps = {
  size: "sm",
  color: "default"
};

Spinner.propTypes = {
  size: PropTypes.oneOf("sm", "md", "lg"),
  color: PropTypes.oneOf("default", "accent")
};

export default Spinner;
