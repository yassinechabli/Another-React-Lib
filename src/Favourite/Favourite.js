import React from "react";
import "./Favourite.css";
import PropTypes from "prop-types";
import Star from "./Star.js";

const Favourite = ({ dimensions }) => {
  const [setToggle, isToggled] = React.useState(false);

  const handleToggle = () => setToggle(!isToggled);

  return (
    <Star
      onClick={handleToggle}
      fill={isToggled ? "#ffd055" : "#d8d8d8"}
      dimensions={dimensions}
    />
  );
};

Favourite.propTypes = {
  dimensions: PropTypes.number.isRequired
};

export default Favourite;
