import { combineReducers } from 'redux'
import folders from './folders'
import activeFolder from './activeFolder'
import campaigns from './campaigns'
import emailActivity, * as fromEmailActivity from './emailActivity'
import activeCampaigns, * as fromActiveCampaigns from './activeCampaigns'
import filter from './filter'


export default combineReducers({
  folders,
  activeFolder,
  campaigns,
  emailActivity,
  activeCampaigns,
  filter
});

export const getVisibleEmails = (state, filter) =>
  fromEmailActivity.getVisibleEmails(state, filter);

export const sortActiveCampaigns = state =>
  fromActiveCampaigns.sortActiveCampaigns(state);
