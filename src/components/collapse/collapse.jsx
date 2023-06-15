import './collapse.scss'
import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function renderContent () {
    if (Array.isArray(children)) {
      return (
        <ul className = "collapsed-content"> 
          {children.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )
    } else {
      return <p className = "collapsed-content">{children}</p>
    }
  };

  return (
    <div className="collapse-component">
      <div className="collapse-header" >
        <span>{title}</span>
        <i className={isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} onClick={() => setIsOpen(!isOpen)}></i>
        </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>{renderContent()}</div>
    </div>
  );
};

export default Collapse;
