import { combineReducers } from 'redux'
import folders from './folders'
import activeFolder from './activeFolder'
import campaigns from './campaigns'
import emailActivity from './emailActivity'

const app = combineReducers({
  folders,
  activeFolder,
  campaigns,
  emailActivity
});

export default app;
