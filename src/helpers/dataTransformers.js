//These functions except raw data from mailchimp and transforms it into something that can be stored in state and updated efficiently. I did this to avoide having to use double 'for' loop's to update state and put the data in a format easily consumed by Fixed Data Table
export const emailActivityRawToStore = response => {
  const emails = response.emails;

  return emails.map(email => {
    email.activity = email.activity.map(act => act.action);

    return ({
      [email["email_address"]]: {
        [email["campaign_id"]]: email.activity,
        opened: email.activity.includes('open') ? 1 : 0,
        clicked: email.activity.includes('click') ? 1 : 0,
        unsubed: 0
      }
    });
  }).reduce((prev, cur) => {
    return Object.assign(prev, cur)
  }, []);
}

export const emailUnsubRawToStore = response => {
  const unsubs = response.unsubscribes;

  return unsubs.map(unsub => ({
      [unsub["email_address"]]: {
        [unsub["campaign_id"]]: ["unsub"],
        opened: 0,
        clicked: 0,
        unsubed: 1
      }
    })
  ).reduce((prev, cur) => {
    return Object.assign(prev, cur)
  }, []);
}
