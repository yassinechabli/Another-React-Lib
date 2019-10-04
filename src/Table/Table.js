import React from 'react';

// * style
import './Table.css';

export default ({
  data,
  headerColor,
  border,
  borderColor,
  borderWidth,
  fontSize,
  rowFontColor,
  headerFontColor,
  striped,
  hoverEffect,
  rowBackgroundColor
}) => {
  const renderTableData = data => {
    return data.map((val, index) => {
      let keys = Object.keys(data[0]);
      return (
        <tr
          className={`${striped} ? striped : '', ${hoverEffect} ? hover-row : ''`}
          key={index}
          style={{ backgroundColor: rowBackgroundColor }}
        >
          {keys.map((key, index) => (
            <td
              key={index}
              id={border ? 'bordered' : 'unBordered'}
              style={{
                borderColor,
                borderWidth,
                fontSize,
                color: rowFontColor
              }}
            >
              {val[key]}
            </td>
          ))}
        </tr>
      );
    });
  };

  const renderTableHeader = data => {
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return (
        <th
          id={border ? 'bordered' : 'unBordered'}
          style={{
            backgroundColor: headerColor,
            borderColor,
            borderWidth,
            fontSize,
            color: headerFontColor
          }}
          key={index}
        >
          {key.toUpperCase()}
        </th>
      );
    });
  };

  return (
    <div>
      <table id="data">
        <tbody>
          <tr>{renderTableHeader(data)}</tr>
          {renderTableData(data)}
        </tbody>
      </table>
    </div>
  );
};

// * PROPS--------------------------
// * data -> Array Of Objects
// * headerColor -> Hex/Rgba
// * border -> Boolean
// * borderColor -> Hex/Rgba
// * borderWidth -> Pixels/Numeric
// * fontSize -> Pixels/Numeric
// * rowFontColor -> Hex/Rgba
// * headerFontColor -> Hex/Rgba
// * striped -> Boolean
// * hoverEffect -> Boolean
// * rowBackgroundColor -> Hex/Rgba
