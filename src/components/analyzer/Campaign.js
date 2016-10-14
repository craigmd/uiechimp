import React from 'react'

const Campaign = ({ children }) => {
  return (
    <li className="campaign">
      <label>
        <div className="checkbox-container"><input type="checkbox" /></div>
        <span>{children}</span>
      </label>
    </li>
  );
}

export default Campaign
