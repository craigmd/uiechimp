import React from 'react'
import { connect } from 'react-redux'
import LegendAction from './LegendAction'
import EmailsTable from './EmailsTable'

class Emails extends React.Component {
  render(){

    return (
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
        <EmailsTable />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns
});

export default connect(
  mapStateToProps
)(Emails)
