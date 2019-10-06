import React from "react";
import PropTypes from "prop-types";
import "./List.css";

/**
 * Simple List Component
 * To render
 * listItems array should be an array of objects and content is required in that.
 * E.g:
 * <List style={} height={} width={} listItems={[{content: "Item1", height: 100, background: '#345995', style={}}, 
        {content: "Item2", height: 100, background: '#03CEA4', style={}}, 
        {content: "Item3", height: 100, background: '#FB4D3D', style={}}]} >
    </List>
 * 
 */
const List = ({ listItems = [], styles, height, width }) => {
    const listStyles = {
        ...styles,
        height: height,
        width: width
    }
    return (
        <ul style={listStyles} className="list">
            {listItems.map((item, index) => {
                const itemStyle = {
                    ...item.styles,
                    background: item.background,
                    height: item.height
                }
                return (
                    <li style={itemStyle} role="listitem" className="listitem" key={index}>
                        <div className="content">{item.content}</div>
                    </li>
                );
            })}
        </ul>
    );
}

List.propTypes = {
    listItems: PropTypes.array.isRequired,
    styles: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number
};

List.defaultProps = {
    height: 500,
    width: 250
}

export default List;
