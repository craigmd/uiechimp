const activeFolder = (state='', action) => {
  switch(action.type) {
    case 'SET_ACTIVE_FOLDER':
      return action.id;
    default:
      return state;
  }
}

export default activeFolder;
