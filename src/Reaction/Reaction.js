import React from "react";
import PropTypes from "prop-types";
import "./Reaction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faBookmark,
  faShareAlt,
  faComment
} from "@fortawesome/free-solid-svg-icons";

const Reaction = ({ type, action }) => {
  const icons = {
    like: <FontAwesomeIcon icon={faThumbsUp} />,
    dislike: <FontAwesomeIcon icon={faThumbsDown} />,
    heart: <FontAwesomeIcon icon={faHeart} />,
    share: <FontAwesomeIcon icon={faShareAlt} />,
    bookmark: <FontAwesomeIcon icon={faBookmark} />,
    comment: <FontAwesomeIcon icon={faComment} />
  };
  const icon = icons[type];
  return (
    <button className="reaction" onClick={action}>
      {icon}
    </button>
  );
};

Reaction.propTypes = {
  type: PropTypes.oneOf([
    "like",
    "dislike",
    "share",
    "heart",
    "comment",
    "bookmark"
  ]),
  action: PropTypes.function
};

export default Reaction;
