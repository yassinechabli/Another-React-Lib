import React from "react";
import PropTypes from "prop-types";
import "./Link.css";

/**
 * Simple Link
 * Renders a link
 * E.g.:
 * ```html
 * <Link href='#' text='my link text' />
 * ```
 */
const Link = props => {
  let { href, text } = props;
  return (
    <a href={href} className="link">
      {text}
    </a>
  );
};

Link.defaultProps = {
  href: "#",
  text: "Text goes here"
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Link;
