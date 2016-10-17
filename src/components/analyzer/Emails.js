import React from 'react'
import LegendAction from './LegendAction'
import EmailsTable from '../../containers/analyzer/EmailsTable'

const Emails = () => (
  <div className="emails-container">
    <div className="legend flex-between">
      <h4 className="email-filter">Emails: <span className="emails-count">15,143</span></h4>
      <div className="legend-action-container flex-between">
        <LegendAction>Open</LegendAction>
        <LegendAction>Click</LegendAction>
        <LegendAction>Bounce</LegendAction>
        <LegendAction>Unsub</LegendAction>
        <LegendAction>None</LegendAction>
      </div>
    </div>
    <div className="col-group-headers">
      <div className="email-address-header">Email Address</div>
      <div className="campaigns-header">Campaigns</div>
    </div>
    <EmailsTable />
  </div>
);

export default Emails
