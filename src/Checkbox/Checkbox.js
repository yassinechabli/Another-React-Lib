import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
    title = '',
    options = [],
    onItemClick = () => { }
}) => {
    return (
        <div >
            <label>{title}</label>
            <form>
                {options.map((value, index) => {
                    return (
                        <div>
                            <input type="checkbox" id={value.id} name="checkbox" onClick={() => onItemClick(item.id)}/>
                            <label for="checkbox">{value.label}</label>
                        </div>
                    );
                })}
            </form>
        </div>
    );
};

Checkbox.propTpes = {
    options: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
};
export default Checkbox;