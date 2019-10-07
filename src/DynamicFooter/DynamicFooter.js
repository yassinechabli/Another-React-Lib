import React from 'react';

import './DynamicFooter.css';

export default ({ children, backgroundColor, color }) => {
  return (
    <div className={`footer`} style={{ backgroundColor, color }}>
      {children}
    </div>
  );
};
