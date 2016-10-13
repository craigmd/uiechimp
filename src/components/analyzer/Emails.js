import React from 'react'
import LegendAction from './LegendAction'

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


      </div>
    );
  }
}

export default Emails
