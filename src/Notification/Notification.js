import React from "react";
import PropTypes from "prop-types";
import "./Notification.css";

const Notification = ({ number = 0, color }) => {

  return (
    <button className={`notification notification-${color}`}>{number}</button>
  );
};

Notification.propTypes = {
  color: PropTypes.oneOf(["red", "blue"]),
  number: PropTypes.number
};

export default Notification;
