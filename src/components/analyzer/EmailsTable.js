import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2'
import CampaignCell from './CampaignCell'

const EmailsTable = ({ emails, activeCampaigns }) => {
  return (
    <Table
      rowsCount={emails.length}
      rowHeight={51}
      width={960}
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
              key={campaign}
              cell={<CampaignCell data={emails} col={campaign} first={true} />}
              width={42}
            />
          );
        }

        return (
          <Column
            key={campaign}
            cell={<CampaignCell data={emails} col={campaign} first={false} />}
            width={27}
          />
        );
      })}
    </Table>
  );
}

export default EmailsTable
