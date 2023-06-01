import './collapse.css'
import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-component">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <div className="collapse-icon">
        </div>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;