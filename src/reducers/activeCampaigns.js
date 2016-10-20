const activeCampaigns = (state=[], action) => {
  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      return [...state, action.id];
    default:
      return state;
  }
}

export default activeCampaigns
