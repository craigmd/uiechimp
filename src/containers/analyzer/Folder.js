import React from 'react'
import { connect } from 'react-redux'
import { fetchCampaigns } from '../../api'
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
        fetchCampaigns(endpoint).then(body =>
           dispatch(getFolderCampaigns(body.campaigns))
        );
      }}
    >{children}</li>
  );
}

export default connect()(Folder)
