import React from 'react'
import { connect } from 'react-redux'
import Folder from './Folder'
import { fetchFolders } from '../../api'
import { getFolders } from '../../actions'

class Folders extends React.Component {
  componentDidMount() {
    fetchFolders().then(body => this.props.getFolders(body.folders));
  }

  render() {
    const folders = this.props.folders.map(folder => {
      let { name, _links: links, id } = folder;
      //the endpoint for the campaigns comes directly from Mail Chimp
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
  { getFolders }
)(Folders);
