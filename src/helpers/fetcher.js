import 'whatwg-fetch'

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
