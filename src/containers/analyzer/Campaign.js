import React from 'react'
import { connect } from 'react-redux'
import { fetchAPIData } from '../../api'
import { getCampaignReport, deleteCampaignReport } from '../../actions'

const Campaign = ({ id, dispatch, children }) => {
  let endpoint = 'reports/' + id + '/email-activity';
  return (
    <li className="campaign">
      <label>
        <div className="checkbox-container">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                fetchAPIData(endpoint).then(response =>
                  dispatch(getCampaignReport(response.emails, id))
                );
              } else {
                dispatch(deleteCampaignReport(id));
              }
            }}
          />
        </div>
        <span>{children}</span>
      </label>
    </li>
  );
}

export default connect()(Campaign)
