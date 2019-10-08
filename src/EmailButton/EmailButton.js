import React from "react";
import PropTypes from "prop-types";
import email from "./email.png";

const EmailButton = ({ mailto, subject, body, size }) => (
  <div className="container">
    <a
      href={`mailto:${mailto}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`}
    >
      <img src={email} className={`icon-${size || "md"}`} />
    </a>
  </div>
);

EmailButton.propTypes = {
  mailto: PropTypes.string,
  subject: PropTypes.string,
  body: PropTypes.string,
  size: PropTypes.string
};

export default EmailButton;
