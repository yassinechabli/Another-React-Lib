import React from "react";
import PropTypes from "prop-types";
import "./ExtraOptions.css";

const ExtraOptions = ({ options }) => {
  const [setHover, hover] = React.useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div
      className="section"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {hover && (
        <ul className="optionsList">
          {options.map((option, index) => (
            <li key={`${option}-${index}`} className="option">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ExtraOptions.propTypes = {
  options: PropTypes.array
};

ExtraOptions.defaultProps = {
  options: ["Delete", "Save"]
};

export default ExtraOptions;
