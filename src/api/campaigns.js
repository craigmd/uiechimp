import fetcher from '../helpers/fetcher'

export const fetchCampaigns = (endpoint) => { //this one takes the url from a parent as a prop
  const host = process.env.NODE_ENV === 'production' ?
    '/api' : 'http://localhost:4000/api';
  const url = encodeURIComponent(endpoint + '&count=1000');
  const myInit = {
    method: 'GET',
    mode: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cors'
  };

  return fetcher(`${host}?url=${url}`, myInit);
}

export default fetchCampaigns