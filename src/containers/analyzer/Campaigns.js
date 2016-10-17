import React from 'react'
import { connect } from 'react-redux'
import Campaign from './Campaign'

class Campaigns extends React.Component {
  render() {
    const campaigns = this.props.campaigns.map(campaign => {
      let { id, settings } = campaign;
      return (
        <Campaign
          key={id}
          id={id}
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
          {campaigns}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns
});

export default connect(
  mapStateToProps
)(Campaigns)
