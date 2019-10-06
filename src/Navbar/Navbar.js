import React from 'react'
import './navbar.css'

import NavItems from "./NavItems"
import NavLink from "./NavLink"
import NavBrand from "./NavBrand"



const Navbar = ({ theme, styles, children }) => {
    return (
        <div className={`navbar-container bg ${theme}`} style={styles}>
            {children}
        </div>
    )
}

Navbar.defaultProps = {
    theme: "light",
    styles: {},
    handleClick: () => { }
}

Navbar.Items = NavItems
// Navbar.Link = NavLink
Navbar.Brand = NavBrand

export default Navbar