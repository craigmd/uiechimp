import { combineReducers } from 'redux';

const emailActivity = (state={}, action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      let newState = {...state};

      for (const email in action.response) {
        if (newState.hasOwnProperty(email)) {
          Object.assign(newState[email], action.response[email]);
        }
      }

      return Object.assign(action.response, newState);
    case 'DELETE_CAMPAIGN_EMAIL_ACTIVITY':
      return state;
    default:
      return state;
  }
}

export default emailActivity
