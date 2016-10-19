const uniqueActivity = activities => {
  const actions = activities.map(activity => activity.action);
  return [...new Set(actions)];
};

const transformEmailActivity = (response, id) => {
  return response.map(email => ({
    [email["email_address"]]: {
      [email["campaign_id"]]: uniqueActivity(email.activity)
    }
  })).reduce((prev, cur) =>
    Object.assign(prev, cur)
  );
};

export default transformEmailActivity
