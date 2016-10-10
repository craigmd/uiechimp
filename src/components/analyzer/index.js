//Libs
import React from 'react'

//Components
import Folders from './Folders'
import Campaigns from './Campaigns'
import Controller from './Controller'
import Emails from './Emails'

const Analyzer = () => (
  <div className="container">
    <div className="row">
      <Folders />
      <Campaigns />
    </div>
    <div className="row">
      <Controller />
    </div>
    <Emails />
  </div>
);

export default Analyzer
