import React from 'react'
import { Link } from 'react-router'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="container row">
            <span>UIE Chimp pro</span>
            <a className="list-creator-btn" href="#">Make This List</a>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Layout
