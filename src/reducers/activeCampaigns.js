const activeCampaigns = (state=new Map(), action) => {
  let newState = new Map(state.entries());

  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      const timeStamp = new Date(action.timeStamp);
      return new Map(state.entries())
        .set(action.id, {timeStamp: timeStamp, title: action.title});
    case 'DELETE_ACTIVE_CAMPAIGN':
      newState.delete(action.id);
      return newState;
    default:
      return state;
  }
}

export default activeCampaigns

export const sortActiveCampaigns = state => {
  return [...state.entries()].sort((a, b) => {
    if (a[1].timeStamp > b[1].timeStamp) return 1;
    if (a[1].timeStamp < b[1].timeStamp) return -1;
    return 0;
  });
};
