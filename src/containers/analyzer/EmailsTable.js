import React from 'react'
import { connect } from 'react-redux'
import { Table, ColumnGroup, Column, Cell } from 'fixed-data-table-2'

const EmailsTable = ({ emailActivity }) => {
  let byEmail = {};
  const allCampaignEmails = emailActivity.allIds
    .map(id => emailActivity.byId[id])
    .reduce((prev, cur) => {
      return prev.concat(cur);
    }, []);

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
              >{console.log(allCampaignEmails)}</Cell>
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
