import React from 'react'

const LegendAction = ({ children }) => {
  const actionBoxClasses = "action-box action-box--" + children.toLowerCase();
  return (
    <div className="legend-action">
      <div className={actionBoxClasses}></div>
      <span className="action-type">{children}</span>
    </div>
  );
}

export default LegendAction
