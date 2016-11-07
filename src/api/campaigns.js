import fetcher from '../helpers/fetcher'

export const fetchCampaigns = (url) => { //this one takes the url from a parent as a prop
  const host = process.env.NODE_ENV === 'production' ?
    '' : 'http://localhost:3000/api';
  const myInit = {
    method: 'GET',
    mode: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cors'
  };

  return fetcher(`${host}?url=${url}`, myInit);
}

export default fetchCampaigns
