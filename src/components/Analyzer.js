import React from 'react'
import Folders from '../containers/analyzer/Folders'
import Campaigns from '../containers/analyzer/Campaigns'
import Controller from './analyzer/Controller'
import Emails from './analyzer/Emails'


const Analyzer = () => (
  <div className="container">
    <div className="row">
      <Folders />
      <Campaigns />
    </div>
    <div className="row">
      <Controller />
    </div>
    <div className="row">
      <Emails />
    </div>
  </div>
);

export default Analyzer
