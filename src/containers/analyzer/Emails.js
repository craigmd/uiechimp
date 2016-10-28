import React from 'react'
import { connect } from 'react-redux'
import LegendAction from '../../components/analyzer/LegendAction'
import EmailsTable from '../../components/analyzer/EmailsTable'
import { getVisibleEmails } from '../../reducers'

const Emails = ({ emailActivity, activeCampaigns }) => {
  return (
    <div className="emails-container">
      <div className="legend flex-between">
        <h4 className="email-filter">
          Emails: <span className="emails-count">{emailActivity.length}</span>
        </h4>
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
      <EmailsTable
        emails={emailActivity}
        activeCampaigns={activeCampaigns}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  emailActivity: getVisibleEmails(state.emailActivity, state.filter),
  activeCampaigns: state.activeCampaigns
});

export default connect(mapStateToProps)(Emails)
