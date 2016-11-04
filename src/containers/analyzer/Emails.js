import React from 'react'
import { connect } from 'react-redux'
import LegendAction from '../../components/analyzer/LegendAction'
import EmailsTable from '../../components/analyzer/EmailsTable'
import { getVisibleEmails, sortActiveCampaigns } from '../../reducers'
import ReactTooltip from 'react-tooltip'

const Emails = ({ emailActivity, activeCampaigns }) => {
  const colHeaders = activeCampaigns.map((campaign, index) => (
    <div key={campaign[0]}>
      <span data-tip={campaign[1].title}>{index+1}</span>
      <ReactTooltip place="right" type="dark" effect="float" />
    </div>
  ));

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
        <div className="campaigns-header">
          <span>Campaigns</span>
          <div className="col-groups">
            {colHeaders}
          </div>
        </div>
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
  activeCampaigns: sortActiveCampaigns(state.activeCampaigns)
});

export default connect(mapStateToProps)(Emails)
