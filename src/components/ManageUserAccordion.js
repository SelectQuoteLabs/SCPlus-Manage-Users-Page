import React from 'react';
import { useQuery } from 'react-query';
import { Typography } from '@material-ui/core';
import { Accordion, DataTable } from 'scplus-shared-components';

const getUsersData = async () => {
  const res = await fetch(`http://localhost:8000/DUMMY_USERS_DATA`);
  const userData = await res.json();
  return userData;
};

const ManageUserAccordion = ({ handleSelectedUserChange }) => {
  const [userName, setUserName] = React.useState('No user selected');

  const { data } = useQuery('userData', () => getUsersData(), {
    keepPreviousData: true,
  });

  const dummyUsers = () => {
    const dummyData = data?.map(({ userName, userComment }) => {
      return { name: userName, comment: userComment };
    });

    return dummyData;
  };

  const onCellClick = ({ data: { name, comment } }) => {
    handleSelectedUserChange({
      userName: name,
      userComment: comment,
    });

    setUserName(name);
  };

  return (
    <Accordion
      accordionPanels={[
        {
          body: (
            <DataTable
              domLayout="autoHeight"
              columns={[
                {
                  field: 'name',
                  filterParams: {
                    defaultOption: 'filterBy',
                    filterOptions: [
                      {
                        displayKey: 'filterBy',
                        displayName: 'Filter by… (All)',
                        hideFilterInput: true,
                      },
                      {
                        displayKey: 'valid',
                        displayName: 'Valid',
                        hideFilterInput: true,
                      },
                    ],
                    suppressAndOrCondition: true,
                  },
                  headerName: `Name`,
                  onCellClicked: (value) => onCellClick(value),
                },
                {
                  field: 'comment',
                  headerName: 'Comments',
                },
              ]}
              rowData={dummyUsers()}
              zeroItemsMessage="Custom Zero Items Message"
            />
          ),
          isInitiallyExpanded: true,
          name: 'one',
          subtitles: [
            <Typography variant="h5" color="textSecondary">
              {userName}
            </Typography>,
          ],
          title: <Typography variant="h5">Manage Users:</Typography>,
        },
      ]}
    />
  );
};

export default ManageUserAccordion;
