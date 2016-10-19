import React from 'react'
import { connect } from 'react-redux'
import { fetchAPIData } from '../../api'
import { getCampaignEmailActivity, deleteCampaignReport } from '../../actions'
import transformEmailActivity from './helpers/transformAPIData'

const Campaign = ({ id, dispatch, children }) => {
  const endpoint = 'reports/' + id + '/email-activity';

  return (
    <li className="campaign">
      <label>
        <div className="checkbox-container">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                fetchAPIData(endpoint)
                  .then(response =>
                    transformEmailActivity(response.emails, id))
                  .then(transformedResponse =>
                    dispatch(getCampaignEmailActivity(transformedResponse)))
                  .catch(error => console.error("error: ", error.message));
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
