import fetcher from '../helpers/fetcher'
import { host, myGetInit } from './settings'

export const fetchFolders = () => {
  //change count param if there are more than 1000 folders
  const url = 'https://us5.api.mailchimp.com/3.0/campaign-folders?count=1000';
  return fetcher(`${host}?url=${url}`, myGetInit);
}

export default fetchFolders
