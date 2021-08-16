import React from 'react';
import { useQuery } from 'react-query';
import { Grid, makeStyles } from '@material-ui/core';
import { DataTable, ComponentLoadingSpinner } from 'scplus-shared-components';

const getUsersData = async () => {
  const userData = await fetch(`http://localhost:8000/DUMMY_USERS_DATA`).then(
    (res) => res.json()
  );

  return userData;
};

const useStyles = makeStyles(() => ({
  tableContainer: {
    height: '100%',
  },
}));

const ManageFetchUserData = ({ handleSelectedUserChange }) => {
  const { data, isLoading, isError } = useQuery('userData', getUsersData);

  const classes = useStyles();

  const onCellClick = (userData) => {
    handleSelectedUserChange(userData);
  };

  const columnsWithCellRender = [
    {
      field: 'userName',
      headerName: `Users`,
      onCellClicked: ({ data }) => onCellClick(data),
    },
    {
      field: 'userComment',
      headerName: 'Comments',
    },
  ];

  return (
    <Grid container className={classes.tableContainer}>
      {isLoading ? (
        <ComponentLoadingSpinner message="Loading" />
      ) : isError ? (
        <Grid item container justify="center">
          <Typography variant="h6" align="center">
            Oops! Somthing went wrong!
          </Typography>
        </Grid>
      ) : (
        <DataTable
          columns={columnsWithCellRender}
          rowData={data}
          zeroItemsMessage="Custom Zero Items Message"
          resizable={false}
        />
      )}
    </Grid>
  );
};

export default ManageFetchUserData;
