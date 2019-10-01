import React, { useState } from "react";
import './tab.css';

const Tabs = ({
  children = [],
  defaultTab = 0,
  ...rest
}) => {
  if (!children.length)
    children = [children];

  const [activeTab, setActiveTab] = useState(children[defaultTab]);
  const [tabIndex, setTabIndex] = useState(defaultTab);
  const toggleTab = (index) => {
    setTabIndex(index);
    setActiveTab(children[index])
  }

  return (
    <div className="tabs-container">
      <div className="tabs-control">
        {children && children.map((tab, index) =>
          <div className={`tab-title ${index === tabIndex && 'active'}`} onClick={() => toggleTab(index)}>
            {tab.props.title || `Tab${index}`}
          </div>
        )}
      </div>
      <div className="tab-view">
        {children && React.cloneElement(activeTab, {
          tab: activeTab
        })}
      </div>
    </div>
  );
};

// Tabs.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired
// };
export default Tabs;