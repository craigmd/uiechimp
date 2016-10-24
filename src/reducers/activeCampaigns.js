const activeCampaigns = (state=[], action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      return [...state, action.id];
    case 'DELETE_ACTIVE_CAMPAIGN':
      return state.filter(campaignId => campaignId !== action.id);
    default:
      return state;
  }
}

export default activeCampaigns
