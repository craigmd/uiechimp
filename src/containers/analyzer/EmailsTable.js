import React from 'react'
import { connect } from 'react-redux'
import { Table, ColumnGroup, Column, Cell } from 'fixed-data-table-2'
import CampaignCell from '../../components/analyzer/CampaignCell'

const EmailsTable = ({ emailActivity, activeCampaigns }) => {
  const emails = Object.entries(emailActivity);

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

const mapStateToProps = state => ({
  emailActivity: state.emailActivity,
  activeCampaigns: state.activeCampaigns
});

export default connect(
  mapStateToProps
)(EmailsTable)
