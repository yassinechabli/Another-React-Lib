import React from 'react'
import './navitem.css'

const NavItem = ({ text, styles, handleClick }) => {
    return (
        <div className="nav-item" styles={styles}>
            <a href="true" onClick={handleClick}>{text}</a>
        </div>
    )
}

NavItem.defaultProps = {
    text: "Item",
    styles: {},
    handleClick: () => { }
}

export default NavItem