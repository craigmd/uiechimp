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
//   foo: {aycl1: [1,2,3], aycl2: [4,5,6]},
//   bar: {aycl1: [4,5,6]}
// }
//
// for (const prop in state) {
//   if (prop === "foo") {
//     delete state[prop]["aycl2"];
//   }
//   console.log("state after: ", state);
// }
