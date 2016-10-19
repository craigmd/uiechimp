export const getFolders = (response) => ({
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

export const getCampaignEmailActivity = (response) => ({
  type: 'GET_CAMPAIGN_EMAIL_ACTIVITY',
  response
});

export const deleteCampaignReport = (id) => ({
  type: 'DELETE_CAMPAIGN_EMAIL_ACTIVITY',
  id
});
