import React from "react";
import PropTypes from "prop-types";
import "./Heading.css";

const Heading = props => (
  <span className={[props.type, ...props.classes]} {...props}>
    {props.children}
  </span>
);

Heading.defaultProps = {
  type: "title",
  classes: []
};

Heading.propTypes = {
  type: PropTypes.oneOf(
    "title",
    "subtitle",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ),
  children: PropTypes.children,
  classes: PropTypes.array
};

export default Heading;
