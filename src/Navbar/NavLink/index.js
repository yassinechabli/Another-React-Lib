import React from 'react'
import './navlink.css'

const NavLink = ({ text, styles, handleClick }) => {
    return (
        <div className="nav-link" styles={styles}>
            <a href="true" onClick={handleClick}>{text}</a>
        </div>
    )
}

NavLink.defaultProps = {
    text: "Link",
    styles: {},
    handleClick: () => { }
}


export default NavLink