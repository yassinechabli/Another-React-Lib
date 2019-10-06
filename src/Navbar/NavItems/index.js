import React from 'react'
import './navitems.css'

import NavItem from "../NavItem"
import NavLink from "../NavLink"

const NavItems = ({ styles, children, handleClick }) => {
    return (
        <div className="nav-items" styles={styles} onClick={handleClick}>
            {children}
        </div>
    )
}

NavItems.defaultProps = {
    styles: {},
    handleClick: () => { }
}

NavItems.Item = NavItem
NavItems.Link = NavLink

export default NavItems