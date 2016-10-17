import { combineReducers } from 'redux'
import folders from './folders'
import activeFolder from './activeFolder'
import campaigns from './campaigns'
import reports from './reports'

const app = combineReducers({
  folders,
  activeFolder,
  campaigns,
  reports
});

export default app;
