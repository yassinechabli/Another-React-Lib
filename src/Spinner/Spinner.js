import React from 'react';
import PropTypes from 'prop-types'
import "./Spinner.css"

const Spinner = ({ size, color, speed, thick, background }) =>
	<div className="spinnerWrapper">
		<div className={`spinner`} style={{
			width: `${size}px`, height: `${size}px`,
			borderColor: background,
			borderTopColor: color, animationDuration: `${speed}s`,
			borderWidth: `${thick}px`, borderTopWidth: `${thick}px`
		}} />
	</div>

Spinner.defaultProps = {
	size: 20,
	color: '#6495ed',
	background: 'rgba(0,0,0,0.2)',
	speed: 2,
	thick: 5
}

Spinner.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	background: PropTypes.string,
	speed: PropTypes.number,
	speed: PropTypes.number
}

export default Spinner;
