import React from "react";
import "./Favourite.css";
import PropTypes from "prop-types";
import Star from "./Star.js";

class Favourite extends React.Component {
  state = {
    isToggled: false
  };

  handleToggle = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  };

  render() {
    const { isToggled } = this.state;
    const { dimensions } = this.props;

    return (
      <Star
        onClick={this.handleToggle}
        fill={isToggled ? "#ffd055" : "#d8d8d8"}
        dimensions={dimensions}
      />
    );
  }
}

Favourite.propTypes = {
  dimensions: PropTypes.number.isRequired
};

export default Favourite;
