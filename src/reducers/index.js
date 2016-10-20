import { combineReducers } from 'redux'
import folders from './folders'
import activeFolder from './activeFolder'
import campaigns from './campaigns'
import emailActivity from './emailActivity'
import activeCampaigns from './activeCampaigns'

const app = combineReducers({
  folders,
  activeFolder,
  campaigns,
  emailActivity,
  activeCampaigns
});

export default app;
