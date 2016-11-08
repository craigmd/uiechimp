import 'whatwg-fetch'

const fetchList = (listId, segmentName, emailAddresses) => {
  const host = 'http://localhost:4000/api'
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
  }

  return fetch(`${host}?url=${url}`, myInit);
}

export default fetchList
