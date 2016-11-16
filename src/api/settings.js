export const host = process.env.NODE_ENV === 'production' ?
  '/api' : 'http://localhost:4000/api';

export const myGetInit = {
  method: 'GET',
  mode: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cors'
};
