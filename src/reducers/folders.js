const folders = (state=[], action) => {
  switch(action.type) {
    case 'RECEIVE_FOLDERS':
      return action.response;
    default:
      return state;
  }
};

export default folders
