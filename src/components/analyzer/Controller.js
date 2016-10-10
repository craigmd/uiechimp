import React from 'react'

class Controller extends React.Component {
  render(){
    return (
      <div className="controller-container">
        <div className="flex-between">
          <h2 className="controller-title">AYCL Content Campaigns</h2>
          <div className="filter-direction-container">
            <input className="below-input" type="checkbox" />
            <span>below</span>
          </div>
        </div>
        <div className="controller">
          <div className="control flex-between">
            <div className="control-value-container">
              <h4>Opens</h4>
              <span className="control-value">10%</span>
            </div>
            <div className="arrows">
              <div className="arrow-up"></div>
              <hr />
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="control flex-between">
            <div className="control-value-container">
              <h4>Opens</h4>
              <span className="control-value">10%</span>
            </div>
            <div className="arrows">
              <div className="arrow-up"></div>
              <hr />
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="control-unsub">
            <div className="control-value-container">
              <h4>Unsub</h4>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controller
