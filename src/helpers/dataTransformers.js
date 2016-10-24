export const emailActivityRawToStore = response => {
  const emails = response.emails;
  const uniqueActions = activities => {
    const actions = activities.map(activity => activity.action);
    return [...new Set(actions)];
  };

  return emails.map(email => {
    const actions = uniqueActions(email.activity);
    return ({
      [email["email_address"]]: {
        [email["campaign_id"]]: actions,
        opened: actions.includes('open') ? 1 : 0,
        clicked: actions.includes('click') ? 1 : 0
      }
    });
  }).reduce((prev, cur) =>
    Object.assign(prev, cur)
  );
}
