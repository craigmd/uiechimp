//Libs
import React, { PropTypes } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

//Components
import Layout from './Layout'
import Analyzer from './analyzer'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path="/" component={Analyzer} />
        </Route>
      </Router>
    </Provider>
  );
}

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// };

export default Root;
