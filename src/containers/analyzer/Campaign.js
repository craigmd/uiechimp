import React from 'react'
import { connect } from 'react-redux'
import { getCampaignEmailActivity, deleteActiveCampaign } from '../../actions'
import fetcher from '../../helpers/fetcher'
import { fetchEmailUnsubs } from '../../api'
import { emailActivityRawToStore, emailUnsubRawToStore } from '../../helpers/dataTransformers'

const Campaign = ({ id, dispatch, children, emailsSent, sentAt}) => {
  let activityURL;
  const count = 400; //number of records to grab per pull
  const host = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:4000/api'
  const setURL = (offset, subresource) => { return encodeURIComponent(
    `https://us5.api.mailchimp.com/3.0/reports/${id}/${subresource}?offset=${offset}&count=${count}`
  )};
  const myInit = { method: 'GET' };
  //It was much more difficult to place this api call into the 'api' directory because of the generator function.
  return (
    <li className="campaign">
      <label>
        <div className="checkbox-container">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                //Both api calls dispatch the same action in this case
                fetchEmailUnsubs(id, emailUnsubRawToStore)
                  .then(body => dispatch(
                    getCampaignEmailActivity(body, id, sentAt, children)
                  ));
                //Checkout exploringjs.com for more info on ES6 Generator functions
                function* increaseOffset(offset = 0) {
                  while (offset < emailsSent) {
                    activityURL = setURL(offset, 'email-activity');
                    fetcher(`${host}?url=${activityURL}`,
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
                    setTimeout(() => runFetch(genObj), 3000); //time it takes before another call is placed (3s)
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
