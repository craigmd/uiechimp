import React from 'react'
import { connect } from 'react-redux'
import { getCampaignEmailActivity, deleteActiveCampaign } from '../../actions'
import fetcher from '../../helpers/fetcher'
import { emailActivityRawToStore } from '../../helpers/dataTransformers'


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
                fetcher(endpoint, emailActivityRawToStore).then(response =>
                  dispatch(getCampaignEmailActivity(response, id))
                )
              } else {
                dispatch(deleteActiveCampaign(id));
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
