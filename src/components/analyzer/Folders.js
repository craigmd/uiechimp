import React from 'react'
import Folder from './Folder'

class Folders extends React.Component {
  render(){
    return (
      <div className="folders-container">
        <h2>Folders</h2>
        <ul className="folders">
          <li className="folder active">AYCL Content</li>
          <li className="folder">AYCL Content, But Much Longer</li>
          <li className="folder">AYCL Content</li>
          <li className="folder">AYCL Content</li>
          <li className="folder">AYCL Content</li>
          <li className="folder">AYCL Content</li>
          <li className="folder">AYCL Content</li>
        </ul>
      </div>
    );
  }
}

export default Folders
