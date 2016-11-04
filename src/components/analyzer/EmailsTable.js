import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2'
import CampaignCell from './CampaignCell'


const EmailsTable = ({ emails, activeCampaigns }) => {
  return (
    <Table
      rowsCount={emails.length}
      rowHeight={51}
      width={962}
      headerHeight={0}
      maxHeight={600}
      >
        <Column
          cell={({ rowIndex }) => (
            <Cell className="email-address-cell"
              >{emails[rowIndex][0]}</Cell>
          )}
          fixed={true}
          width={300}
        />

      {activeCampaigns.map((campaign, index) => {
        if (index === 0) {
          return (
            <Column
              key={campaign[0]}
              cell={<CampaignCell data={emails} col={campaign[0]} first={true} />}
              width={42}
            />
          );
        }

        return (
          <Column
            header={<Cell data-tip="I'm a col!" className="header-cell">{index+1}</Cell>}
            key={campaign[0]}
            cell={<CampaignCell data={emails} col={campaign[0]} first={false} />}
            width={27}
          />
        );
      })}
    </Table>
  );
}

export default EmailsTable
