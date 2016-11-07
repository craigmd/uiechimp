import fetcher from '../helpers/fetcher'

export const fetchEmailActivity = (campaignId, count) => {
  const host = process.env.NODE_ENV === 'production' ?
    '' : 'http://localhost:3000/api';
  const url = 'https://us5.api.mailchimp.com/3.0/campaign-folders?count=1000';
  const myInit = {
    method: 'GET',
    mode: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cors'
  };

  return fetcher(`${host}?url=${url}`, myInit);
}

export default fetchEmailActivity
