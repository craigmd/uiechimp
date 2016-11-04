import React from 'react'
import { connect } from 'react-redux'
import { getCampaignEmailActivity, deleteActiveCampaign } from '../../actions'
import fetcher from '../../helpers/fetcher'
import { emailActivityRawToStore, emailUnsubRawToStore } from '../../helpers/dataTransformers'


const Campaign = ({ id, dispatch, children, emailsSent, sentAt, count }) => {
  let activityURL;
  let unsubURL;
  const setURL = (offset, subresource) => { return encodeURIComponent(
    `https://us5.api.mailchimp.com/3.0/reports/${id}/${subresource}?offset=${offset}&count=${count}`
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
                unsubURL = setURL(0, 'unsubscribed');

                fetcher(`http://localhost:3000/api?url=${unsubURL}`,
                  myInit,
                  emailUnsubRawToStore
                ).then(body => dispatch(
                  getCampaignEmailActivity(body, id, sentAt, children)
                ));

                function* increaseOffset(offset = 0) {
                  while (offset < emailsSent) {
                    activityURL = setURL(offset, 'email-activity');
                    fetcher(`http://localhost:3000/api?url=${activityURL}`,
                      myInit,
                      emailActivityRawToStore
                    ).then(body => dispatch(
                      getCampaignEmailActivity(body, id, sentAt, children)
                    ));
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
