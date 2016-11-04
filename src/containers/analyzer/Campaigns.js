import React from 'react'
import { connect } from 'react-redux'
import Campaign from './Campaign'

const Campaigns  = ({ campaigns }) => {
  const campaignList = campaigns.map(campaign => {
    let {
      id, settings, emails_sent: emailsSent, send_time: sentAt
    } = campaign;

    return (
      <Campaign
        key={id}
        id={id}
        emailsSent={emailsSent}
        sentAt={sentAt}
        title={settings.title}
        count={300}
      >{settings.title}</Campaign>
    );
  });

  return (
    <div className="campaigns-container">
      <div className="flex-between">
        <h2>Campaigns</h2>
        <span className="campaigns-clear-btn">clear</span>
      </div>
      <ul className="campaigns">
        {campaignList}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  campaigns: state.campaigns
});

export default connect(
  mapStateToProps
)(Campaigns)
