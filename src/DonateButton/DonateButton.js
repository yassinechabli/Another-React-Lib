import React from "react";

import PropTypes from "prop-types";
import "./DonateButton.css";

const DonateButton = props => {
  const {textButton, handleClick , classname } = props;

  return (
      <a onClick={handleClick} className={classname} >  {textButton} </a>
        );
};

DonateButton.defaultProps = {
  textButton: "donate",
  classname: "donate",
  handleClick: () => {}
};

DonateButton.propTypes = {
  textButton: PropTypes.string,
  classname: PropTypes.object,
  handleClick: PropTypes.func
};

export default DonateButton;
