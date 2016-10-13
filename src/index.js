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
