import React from 'react'
import Folders from '../containers/analyzer/Folders'
import Campaigns from '../containers/analyzer/Campaigns'
import Filter from '../containers/analyzer/Filter'
import Emails from '../containers/analyzer/Emails'


const Analyzer = () => (
  <div className="container">
    <div className="row">
      <Folders />
      <Campaigns />
    </div>
    <div className="row">
      <Filter />
    </div>
    <div className="row">
      <Emails />
    </div>
  </div>
);

export default Analyzer
