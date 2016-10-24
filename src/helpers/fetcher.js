import { fetchAPIData } from '../api'

const fetcher = (endpoint, transformer = null) => {
  return (
    fetchAPIData(endpoint).then(response => {
      if (transformer) {
        return transformer(response);
      }
      return response;
    })
  );
}

export default fetcher
