import React from 'react'
import { connect } from 'react-redux'
import Controller from '../../components/analyzer/Controller'
import { updateFilterValue } from '../../actions'

const Filter = ({ filter, updateFilterValue }) => {
  return (
    <div className="filter">
      <div className="flex-between">
        <h2 className="filter-title">Campaigns Filter</h2>
        <div className="filter-direction-container">
          <input className="below-input" type="checkbox" />
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
            <input type="checkbox" />
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
  { updateFilterValue }
)(Filter)
