import React from 'react'
import Folders from '../containers/Folders'
import Campaigns from './analyzer/Campaigns'
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
    <Emails />
  </div>
);

export default Analyzer
