import fetcher from '../helpers/fetcher'
import { host, myGetInit } from './settings'

export const fetchCampaigns = (endpoint) => { //this one takes the url from a parent as a prop
  const url = encodeURIComponent(endpoint + '&count=1000');
  return fetcher(`${host}?url=${url}`, myGetInit);
}

export default fetchCampaigns
