const emailActivity = (state={}, action) => {
  let newState = {...state};

  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      const { response, id } = action;

      for (const email in response) {
        const { opened, clicked } = response[email];

        if (newState.hasOwnProperty(email)) {
          Object.assign(
            newState[email], {
              [id]: response[email][id],
              opened: newState[email].opened + opened,
              clicked: newState[email].clicked + clicked
            }
          );
        }
      }

      return Object.assign(action.response, newState);
    case 'DELETE_ACTIVE_CAMPAIGN':
      for (const email in newState) {
        if (newState[email].hasOwnProperty(action.id)) {
          delete newState[email][action.id];

          if (Object.keys(newState[email]).length === 0) {
            delete newState[email];
          }
        }
      }

      return newState;
    default:
      return state;
  }
}

export const getVisibleEmails = (state, filter) => {
  const emails = Object.entries(state);

  return emails.filter(email =>
    email[1].opened >= filter.opened && email[1].clicked >= filter.clicked);
}

export default emailActivity
