import 'whatwg-fetch'
import { host } from './settings'

const fetchList = (listId, segmentName, emailAddresses) => {
  const url=`https://us5.api.mailchimp.com/3.0/lists/${listId}/segments`;
  const myInit = {
    method: 'POST',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      name: segmentName,
      static_segment: emailAddresses
    })
  };

  return fetch(`${host}?url=${url}`, myInit);
}

export default fetchList
