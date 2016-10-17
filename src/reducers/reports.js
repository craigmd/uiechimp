const reports = (state={}, action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_REPORT':
      return {...state, [action.id]: action.response}
    case 'DELETE_CAMPAIGN_REPORT':
      delete state[action.id];
      return state;
    default:
      return state;
  }
}

export default reports
