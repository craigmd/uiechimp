//Data for fake backend
import * as data from '../data'

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchAPIData = (endpoint) =>
  delay(Math.floor(Math.random() * 2000)).then(() => {
    switch(endpoint) {
      case 'campaign-folders':
        return data.folders;
      case 'campaign-folders/aycl':
        return data.ayclCampaigns;
      case 'reports/aycl1/email-activity':
        return data.aycl1;
      case 'reports/aycl2/email-activity':
        return data.aycl2;
      case 'reports/aycl3/email-activity':
        return data.aycl3;
      case 'reports/aycl4/email-activity':
        return data.aycl4;
      default:
        return console.error("That endpoint does not exist!");
    }
  });
