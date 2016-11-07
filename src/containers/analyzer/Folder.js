import React from 'react'
import { connect } from 'react-redux'
import { fetchCampaigns } from '../../api'
import { getFolderCampaigns, setActiveFolder } from '../../actions'

const Folder = ({ isActive, dispatch, id, endpoint, children }) => {
  let classes = 'folder';
  const url = encodeURIComponent(endpoint + '&count=1000');

  if (isActive == id) {
    classes = classes + ' folder--active';
  }
  return (
    <li
      className={classes}
      onClick={() => {
        dispatch(setActiveFolder(id));
        fetchCampaigns(url).then(body =>
           dispatch(getFolderCampaigns(body.campaigns))
        );
      }}
    >{children}</li>
  );
}

export default connect()(Folder)
