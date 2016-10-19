import React from 'react'
import { connect } from 'react-redux'
import { Table, ColumnGroup, Column, Cell } from 'fixed-data-table-2'

const EmailsTable = ({ emailActivity }) => {

  return (
    <Table
      rowsCount={1}
      rowHeight={50}
      width={960}
      headerHeight={0}
      maxHeight={650}
      >
        <Column
          cell={({ rowIndex }) => (
            <Cell className="email-address-cell"
              >"foo.billy@bar.com"</Cell>
          )}
          fixed={true}
          width={300}
        />
    </Table>
  );
}

const mapStateToProps = state => ({
  emailActivity: state.emailActivity
});

export default connect(
  mapStateToProps
)(EmailsTable)
