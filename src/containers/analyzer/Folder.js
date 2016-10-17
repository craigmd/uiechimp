import React from 'react'
import { connect } from 'react-redux'
import { fetchAPIData } from '../../api'
import { getFolderCampaigns, setActiveFolder } from '../../actions'

const Folder = ({ isActive, dispatch, id, endpoint, children }) => {
  let classes = 'folder';
  if (isActive == id) {
    classes = classes + ' folder--active';
  }
  return (
    <li
      className={classes}
      onClick={() => {
        dispatch(setActiveFolder(id));
        fetchAPIData(endpoint).then(response =>
          dispatch(getFolderCampaigns(response.campaigns))
        );
      }}
    >{children}</li>
  );
}

export default connect()(Folder)
