export const receiveFolders = (response) => ({
  type: 'RECEIVE_FOLDERS',
  response
});

export const setActiveFolder = (id) => ({
  type: 'SET_ACTIVE_FOLDER',
  id
});

export const getFolderCampaigns = (response) => ({
  type: 'GET_FOLDER_CAMPAIGNS',
  response
});
