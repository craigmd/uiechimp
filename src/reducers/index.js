import { combineReducers } from 'redux'
import folders from './folders'
import activeFolder from './activeFolder'
import campaigns from './campaigns'

const app = combineReducers({
  folders,
  activeFolder,
  campaigns
});

export default app;
