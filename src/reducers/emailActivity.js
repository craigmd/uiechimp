import isEqual from 'lodash/isEqual'
// I don't think this part of state is well done, but computing opens and clicks on the fly elsewhere seems like it might be a performance issue
const emailActivity = (state={}, action) => {
  let newState = {...state};
  let response = action.response;
  const id = action.id;

  switch(action.type) {
    case 'GET_CAMPAIGN_EMAIL_ACTIVITY':
      for (const email in response) {
        if (newState.hasOwnProperty(email)) {
          if (isEqual(newState[email], response[email])) { //duplicates
            continue;
          }

          Object.assign(
            newState[email], {
              [id]: newState[email][id] ?
                newState[email][id].concat(response[email][id]) :
                response[email][id],
              opened: newState[email].opened + response[email].opened,
              clicked: newState[email].clicked + response[email].clicked,
              unsubed: newState[email].unsubed + response[email].unsubed
            }
          );
        }
      }

      return Object.assign(response, newState);
    case 'DELETE_ACTIVE_CAMPAIGN':
      for (const email in newState) {
        if (newState[email].hasOwnProperty(id)) {
          if (newState[email][id].includes("open")) {
            newState[email].opened--;
          }

          if (newState[email][id].includes("click")) {
            newState[email].clicked--;
          }

          if (newState[email][id].includes("unsub")) {
            newState[email].unsubed--;
          }

          delete newState[email][id];
          //currently 'clicked','opened', and 'unsubed' are the only three
          //non-campaignId props, that is where '3' comes from
          if (Object.keys(newState[email]).length <= 3) {
            delete newState[email];
          }
        }
      }

      return newState;
    default:
      return state;
  }
}

export default emailActivity

export const getVisibleEmails = (state, filter) => {
  const emails = Object.entries(state);

  if (filter.below) {
    return emails.filter(email =>
      email[1].opened <= filter.opened &&
      email[1].clicked <= filter.clicked &&
      email[1].unsubed >= filter.unsubed);
  }

  return emails.filter(email =>
    email[1].opened >= filter.opened &&
    email[1].clicked >= filter.clicked &&
    email[1].unsubed >= filter.unsubed);
}
