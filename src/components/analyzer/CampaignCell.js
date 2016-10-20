import React from 'react'
import { Cell } from 'fixed-data-table-2'

const CampaignCell = ({ rowIndex, data, col, first }) => {
  const action = data[rowIndex][1][col] || ['undefined'];
  let color;
  let classes = first === true ? 'action-box first-col' : 'action-box';

  switch (true) {
    case action.includes('bounce'):
      color = ' action-box--bounce';
      break;
    case action.includes('unsub'):
      color = ' action-box--unsub';
      break;
    case action.includes('click'):
      color = ' action-box--click';
      break;
    case action.includes('open'):
      color = ' action-box--open';
      break;
    case action.length === 0:
      color = ' action-box--none';
      break;
    default:
      color = '';
  }

  return (
    <Cell className="campaign-cell">
      <div className={classes + color}></div>
    </Cell>
  );
}

export default CampaignCell
