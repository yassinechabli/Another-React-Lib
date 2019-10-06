import React from 'react'
import './navbrand.css'

const NavBrand = ({ children, styles, handleClick }) => {
    return (
        <div className="nav-brand" styles={styles} onClick={handleClick}>
            <a href="true">{children}</a>
        </div>
    )
}

NavBrand.defaultProps = {
    styles: {},
    handleClick: () => { }
}


export default NavBrand