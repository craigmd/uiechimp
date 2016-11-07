import fetcher from '../helpers/fetcher'

export const fetchEmailUnsubs = (campaignId, transformer) => {
  const host = process.env.NODE_ENV === 'production' ?
    '/api' : 'http://localhost:3000/api';
  const url = encodeURIComponent(
    `https://us5.api.mailchimp.com/3.0/reports/${campaignId}/unsubscribed?&count=1000`
  );
  const myInit = {
    method: 'GET',
    mode: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cors'
  };

  return fetcher(`${host}?url=${url}`, myInit, transformer);
}

export default fetchEmailUnsubs
