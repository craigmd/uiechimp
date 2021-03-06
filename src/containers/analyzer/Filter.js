import React from 'react'
import { connect } from 'react-redux'
import Controller from '../../components/analyzer/Controller'
import { updateFilterValue, updateFilterOrientation } from '../../actions'

const Filter = ({ filter, updateFilterValue, updateFilterOrientation }) => {
  return (
    <div className="filter">
      <div className="flex-between">
        <h2 className="filter-title">Campaigns Filter</h2>
        <div className="filter-direction-container">
          <input
            className="below-input"
            type="checkbox"
            onChange={updateFilterOrientation}
          />
          <span>below</span>
        </div>
      </div>
      <div className="controllers">
        <Controller
          name="Opened"
          updateValue={1}
          filterValue={filter.opened}
          onArrowClick={updateFilterValue}
        />
        <Controller
          name="Clicked"
          updateValue={1}
          filterValue={filter.clicked}
          onArrowClick={updateFilterValue}
        />
        <div className="control-unsub">
          <div className="control-value-container">
            <h4>Unsub</h4>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  updateFilterValue("unsubed", 1, "up");
                } else {
                  updateFilterValue("unsubed", 1, "down");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(
  mapStateToProps,
  { updateFilterValue, updateFilterOrientation }
)(Filter)
