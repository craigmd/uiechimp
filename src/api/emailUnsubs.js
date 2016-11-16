import fetcher from '../helpers/fetcher'
import { host, myGetInit } from './settings'

export const fetchEmailUnsubs = (campaignId, transformer) => {
  const url = encodeURIComponent(
    `https://us5.api.mailchimp.com/3.0/reports/${campaignId}/unsubscribed?&count=1000`
  );
  return fetcher(`${host}?url=${url}`, myGetInit, transformer);
}

export default fetchEmailUnsubs
