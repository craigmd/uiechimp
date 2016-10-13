import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table-2';

class EmailsTable extends React.Component {
  render(){

    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={960}
        headerHeight={61}
        maxHeight={650}
        overflowY={'hidden'}
        >
        <Column
          header={<Cell className="email-address-col">Email Address</Cell>}
          cell={
            <Cell
              className="email-address-col"
            >craig.dickson@topper.wku.edu</Cell>
          }
          fixed={true}
          width={300}
        />
      </Table>
    );
  }
}

export default EmailsTable
