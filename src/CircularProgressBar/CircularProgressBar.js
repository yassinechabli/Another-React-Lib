import React from "react";
import PropTypes from "prop-types";
import "./CircularProgressBar.css";

const CircularProgressBar = ({
  progress,
  containerStyle,
  fillColor,
  containerClassName,
  width,
  strokeWidth
}) => {
  const viewBox = `0 0 ${width} ${width}`;
  const radius = (width - strokeWidth) / 2;
  const circumference = radius*Math.PI*2;
  const arc = circumference - (circumference*progress/100);

  return (
    <svg viewBox={viewBox} width={width} height={width} style={containerStyle} className={`${containerClassName}`}>
      <circle
        className='background-circle'
        cx = {width / 2}
        cy = {width / 2}
        r = {radius}
        strokeWidth = {`${strokeWidth}px`} />
      <circle
        className='progress-circle'
        cx = {width / 2}
        cy = {width / 2}
        r = {radius}
        strokeWidth = {`${strokeWidth}px`}
        transform={`rotate(-90 ${width/2} ${width/2})`}
        style={
          {
            stroke: fillColor,
            strokeDasharray: circumference,
            strokeDashoffset: arc
          }
        } />
        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle">
          {`${progress}%`}
        </text>
    </svg>
  )
}

CircularProgressBar.propTypes = {
  progress: PropTypes.number,
  containerStyle: PropTypes.any,
  fillColor: PropTypes.string,
  containerClassName: PropTypes.string,
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
};

CircularProgressBar.defaultProps = {
  progress: 20,
  containerStyle: {},
  fillColor: "#4CAF50",
  containerClassName: "",
  width: 200,
  strokeWidth: 5
};

export default CircularProgressBar;