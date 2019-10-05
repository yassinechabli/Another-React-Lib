import React from 'react';
import './SimpleDropdown.css';
const SimpleDropdown = (props) => {
    return(
        <select onChange={(event)=>props.handleOnChange(event)} className="select">
            {
                props.options.map((option,index)=>{
                    return <option key ={index} value={option} className="option">{option}</option>
                })
            }
        </select>
    )
}

SimpleDropdown.defaultProps = {
    options: [],
    handleOnChange: () => {}
  };
  
export default SimpleDropdown;