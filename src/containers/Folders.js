import React from 'react'
import { connect } from 'react-redux'
import Folder from '../components/analyzer/Folder'
import { fetchAPIData } from '../api'
import { receiveFolders } from '../actions'

class Folders extends React.Component {
  componentDidMount() {
    fetchAPIData('campaign-folders').then(response => {
      this.props.receiveFolders(response.folders);
    });
  }

  render() {
    const folders = this.props.folders.map(folder =>
      <Folder
        key={folder.id}
        endpoint={folder._links[4].href}
      >{folder.name}</Folder>
    );

    return <div className="folders-container">
      <h2>Folders</h2>
      <ul className="folders">
        {folders}
      </ul>
    </div>
  }
}

const mapStateToProps = (state) => ({
  folders: state.folders
});

export default connect(
  mapStateToProps,
  { receiveFolders }
)(Folders);
