import React from "react";

import PropTypes from "prop-types";
import "./Searchbar.css"

const Searchbar = ({
  onChange = () => {},
  onSubmit = () => {},
  value = "",
  ...rest
}) => {
  return (
    <div className="form-container searchbar">
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} {...rest} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
export default Searchbar;
