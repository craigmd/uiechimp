import React from 'react'
import { connect } from 'react-redux'
import fetcher from '../../helpers/fetcher'
import { getFolderCampaigns, setActiveFolder } from '../../actions'

const Folder = ({ isActive, dispatch, id, endpoint, children }) => {
  let classes = 'folder';
  const url = encodeURIComponent(endpoint + '&count=300');
  const myInit = { method: 'GET' };

  if (isActive == id) {
    classes = classes + ' folder--active';
  }
  return (
    <li
      className={classes}
      onClick={() => {
        dispatch(setActiveFolder(id));
        fetcher(`http://localhost:3000/api?url=${url}`, myInit).then(body =>
          dispatch(getFolderCampaigns(body.campaigns))
        );
      }}
    >{children}</li>
  );
}

export default connect()(Folder)
