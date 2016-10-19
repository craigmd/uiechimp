import { combineReducers } from 'redux';

const byId = (state={}, action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      let newState = {...state};
      console.log('state: ', state);
      for (const email in action.response) {
        if (newState.hasOwnProperty(email)) {
          Object.assign(newState[email], action.response[email]);
        }
      }

      return Object.assign(action.response, newState);
    case 'DELETE_CAMPAIGN_EMAIL_ACTIVITY':
    default:
      return state;
  }
}

const allIds = (state=[], action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
    case 'DELETE_CAMPAIGN_EMAIL_ACTIVITY':
    default:
      return state;
  }
}

const emailActivity = combineReducers({
  byId,
  allIds
});

export default emailActivity
