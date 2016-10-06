import React from 'react'

const Campaign = ({ id, children }) => {
  return (
    <li className="campaign">
      <input type="checkbox" />
      <span>{id}</span>
      {children}
    </li>
  );
}
