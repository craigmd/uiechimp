import { combineReducers } from 'redux';

const byId = (state={}, action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      return {...state, [action.id]: action.response}
    case 'DELETE_CAMPAIGN_EMAIL_ACTIVITY':
      let newState = state;
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

const allIds = (state=[], action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      return [...state, action.id]
    case 'DELETE_CAMPAIGN_EMAIL_ACTIVITY':
      let newState = state;
      newState.splice(newState.indexOf(action.id), 1);
      return newState;
    default:
      return state;
  }
}

const emailActivity = combineReducers({
  byId,
  allIds
});

export default emailActivity
