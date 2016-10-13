const campaigns = (state=[], action) => {
  switch(action.type) {
    case 'GET_FOLDER_CAMPAIGNS':
      return action.response;
    default:
      return state;
  }
}

export default campaigns;
