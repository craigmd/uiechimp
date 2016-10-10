import React from 'react'

class Emails extends React.Component {
  render(){
    return (
      <div className="emails-container">
        <div className="legend flex-between">
          <h4 className="email-filter">Emails: <span className="emails-count">15,143</span></h4>
          <div className="legend-action-container flex-between">
            <div className="legend-action">
              <div className="action-box action-box--open"></div>
              <span className="action-type">Open</span>
            </div>
            <div className="legend-action">
              <div className="action-box action-box--click"></div>
              <span className="action-type">Click</span>
            </div>
            <div className="legend-action">
              <div className="action-box action-box--bounce"></div>
              <span className="action-type">Bounce</span>
            </div>
            <div className="legend-action">
              <div className="action-box action-box--unsub"></div>
              <span className="action-type">Unsub</span>
            </div>
            <div className="legend-action">
              <div className="action-box"></div>
              <span className="action-type">No Action</span>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Emails
