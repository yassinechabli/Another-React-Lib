import React from "react";
import PropTypes from "prop-types";
import "./twitterShare.css";
import twitter from "./twitterIcon.png";

const TwitterShare = ({ message, size }) => (
  <div className="container">
    <a
      href={`https://twitter.com/intent/tweet?text=${message}`}
      data-show-count="false"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={twitter} className={`icon-${size || "md"}`} />
    </a>
  </div>
);

TwitterShare.propTypes = {
  message: PropTypes.string,
  size: PropTypes.string
};
export default TwitterShare;
