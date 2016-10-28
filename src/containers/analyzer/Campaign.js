import React from 'react'
import { connect } from 'react-redux'
import { getCampaignEmailActivity, deleteActiveCampaign } from '../../actions'
import fetcher from '../../helpers/fetcher'
import { emailActivityRawToStore } from '../../helpers/dataTransformers'


const Campaign = ({ id, dispatch, children, emailsSent, count }) => {
  let url;
  const setURL = offset => { return encodeURIComponent(
    `https://us5.api.mailchimp.com/3.0/reports/${id}/email-activity?offset=${offset}&count=${count}`
  )};
  const myInit = { method: 'GET' };

  return (
    <li className="campaign">
      <label>
        <div className="checkbox-container">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                function* increaseOffset(offset = 0) {
                  while (offset < emailsSent) {
                    url = setURL(offset);
                    fetcher(`http://localhost:3000/api?url=${url}`,
                      myInit,
                      emailActivityRawToStore
                    ).then(body => {
                      dispatch(getCampaignEmailActivity(body, id))}
                    );
                    offset = offset + count;
                    yield;
                  }
                }

                function runFetch(genObj) {
                  if (!genObj.next().done) {
                    setTimeout(() => runFetch(genObj), 500);
                  }
                }

                runFetch(increaseOffset());
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
