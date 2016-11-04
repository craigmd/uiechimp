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
