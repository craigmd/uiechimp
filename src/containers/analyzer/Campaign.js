import React from 'react'
import { connect } from 'react-redux'
import { fetchAPIData } from '../../api'
import { getCampaignEmailActivity, deleteCampaignReport } from '../../actions'
import DataTransformer from '../../helpers/dataTransformer'

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
                  .then(response => {
                    let transform = new DataTransformer(response.emails);
                    return transform.emailActivityRawToStore();
                  })
                  .then(transformedResponse =>
                    dispatch(getCampaignEmailActivity(transformedResponse, id)))
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
