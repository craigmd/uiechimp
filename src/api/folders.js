import fetcher from '../helpers/fetcher'

export const fetchFolders = () => {
  const host = process.env.NODE_ENV === 'production' ?
    '/api' : 'http://localhost:4000/api';
  //change count param if there are more than 1000 folders
  const url = 'https://us5.api.mailchimp.com/3.0/campaign-folders?count=1000';
  const myInit = {
    method: 'GET',
    mode: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cors'
  };

  return fetcher(`${host}?url=${url}`, myInit);
}

export default fetchFolders
