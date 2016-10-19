//Libs
import React from 'react'
import { render } from 'react-dom'

//Components
import Root from './components/Root'

//CSS
import './stylesheets/main.scss'

//store
import configureStore from './configureStore'

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

// let state = {
//   foo: {aycl1: [1,2,3]},
//   bar: {aycl1: [4,5,6]}
// }
//
// let incoming = {
//   foo: {aycl2: [1,2,3]},
//   baz: {aycl2: [4,5,6]}
// }
//
// console.log('state before: ', state);
//
// const combineStructures = (a, b) => {
//   let newA = {...a};
//   for (const entry in b) {
//     if (newA.hasOwnProperty(entry)) {
//       Object.assign(newA[entry], b[entry]);
//     }
//   }
//   Object.assign(b, newA);
//   console.log('b: ', b);
//   return b;
// }
//
// combineStructures(state, incoming);
