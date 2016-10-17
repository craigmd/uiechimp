import React from 'react'
import { connect } from 'react-redux'
import {Table, ColumnGroup, Column, Cell} from 'fixed-data-table-2';

class EmailsTable extends React.Component {
  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={960}
        headerHeight={0}
        maxHeight={650}
        >
          <Column
            cell={
              <Cell className="email-address-cell"
                >craigmichaeldickson@gmail.com</Cell>
            }
            fixed={true}
            width={300}
          />
          <Column
            cell={
              <Cell
                className="campaigns-cell"
              >
                <div className="action-box action-box--none"></div>
              </Cell>
            }
            width={42}
          />
          <Column
            cell={
              <Cell
                className="campaigns-cell"
              >
                <div className="action-box action-box--open"></div>
              </Cell>
            }
            width={27}
          />
          <Column
            cell={
              <Cell
                className="campaigns-cell"
              >
                <div className="action-box action-box--open"></div>
              </Cell>
            }
            width={27}
          />
          <Column
            cell={
              <Cell
                className="campaigns-cell"
              >
                <div className="action-box action-box--open"></div>
              </Cell>
            }
            width={27}
          />
          <Column
            cell={
              <Cell
                className="campaigns-cell"
              >
                <div className="action-box action-box--open"></div>
              </Cell>
            }
            width={27}
          />
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  reports: state.reports
});

export default connect(
  mapStateToProps
)(EmailsTable)
