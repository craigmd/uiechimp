import React from 'react'
import { connect } from 'react-redux'
import { getVisibleEmails } from '../../reducers'
import 'whatwg-fetch'

const CreateSegmentModal = ({ emailActivity, toggleMe }) => {
  const emailAddresses = emailActivity.map(activity => activity[0]);

  return (
    <div className="modal">
      <div
        className="close-modal"
        onClick={toggleMe}
      >X</div>
      <div className="create-segment-form">
        <div className="form-group">
          <label htmlFor="segment-name">Segment Name</label>
          <input
            id="segment-name"
            className="segment-name"
            type="text"
            name="segment-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="list-id">List ID</label>
          <input
            id="list-id"
            className="list-id"
            type="text"
            name="list-id"
            defaultValue="382de78e4c"
          />
        </div>
        <button
          className="create-segment-btn"
          onClick={() => {
            const segmentNameInput = document.getElementById('segment-name');
            const listIdInput = document.getElementById('list-id');
            const url=`https://us5.api.mailchimp.com/3.0/lists/${listIdInput.value}/segments`;
            const myInit = {
              method: 'POST',
              headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify({
                name: segmentNameInput.value,
                static_segment: emailAddresses
              })
            }
            fetch(`http://localhost:3000/api?url=${url}`, myInit)
              .then(response => response.json())
              .then(body => console.log('response body: ', body))
              .catch(error => console.error('Woops, ', error.message));
              
            toggleMe();
          }}
        >Create Segment</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  emailActivity: getVisibleEmails(state.emailActivity, state.filter),
  showModal: ownProps.show
});

export default connect(mapStateToProps)(CreateSegmentModal)
