import React from "react";
import PropTypes from "prop-types";
import './Header.css'

const Header = ({ brandName = 'My App', theme = 'dark' }) => {
  function toggleSandwich() {
    const x = document.getElementById('mytopnav')
    if (x.className === theme) {
      x.className += ' sandwich'
    } else {
      x.className = theme
    }
  }

  return (
    <div>
      <nav>
        <div className={theme} id='mytopnav'>
          <div className='brand'>{brandName}</div>
          <a className='active' href='#home'>
            Home
          </a>
          <a href='#posts'>Posts</a>
          <a href='#about'>About</a>
          <a className='icon' onClick={toggleSandwich}>
            <i className='fa fa-bars'></i>
          </a>
        </div>
      </nav>
    </div>
  )
}


Header.propTypes = {
  brandName: PropTypes.string.isRequired,
  theme: PropTypes.string
};

export default Header
