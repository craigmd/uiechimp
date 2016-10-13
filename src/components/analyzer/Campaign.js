import React from 'react'

const Campaign = ({ localId, children }) => {
  return (
    <li className="campaign">
      <label>
        <div className="checkbox-container"><input type="checkbox" /></div>
        <span className="campaign-id">{localId}</span>
        <span>{children}</span>
      </label>
    </li>
  );
}

export default Campaign
