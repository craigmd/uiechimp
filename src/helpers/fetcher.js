import 'whatwg-fetch'
//This uses the transformers to return a 'body' that is suitable to dispatch
const fetcher = (endpoint, settings, transformer = null) => {
  return (
    fetch(endpoint, settings)
      .then(response => response.json())
      .then(body => {
        if (transformer) {
          return transformer(body);
        }
        return body;
    })
  );
}

export default fetcher
