import React from 'react'
import { connect } from 'react-redux'
import Folder from '../components/analyzer/Folder'
import { fetchAPIData } from '../api'
import { receiveFolders } from '../actions'

class Folders extends React.Component {
  componentDidMount() {
    fetchAPIData('campaign-folders').then(response =>
      this.props.receiveFolders(response.folders)
    );
  }

  render() {
    const folders = this.props.folders.map(folder => {
      let { name, _links: links, id } = folder;
      return (
        <Folder
          key={id}
          id={id}
          endpoint={links[4].href}
          isActive={this.props.activeFolder}
        >{name}</Folder>
      );
    });

    return <div className="folders-container">
      <h2>Folders</h2>
      <ul className="folders">
        {folders}
      </ul>
    </div>
  }
}

const mapStateToProps = state => ({
  folders: state.folders,
  activeFolder: state.activeFolder
});

export default connect(
  mapStateToProps,
  { receiveFolders }
)(Folders);
