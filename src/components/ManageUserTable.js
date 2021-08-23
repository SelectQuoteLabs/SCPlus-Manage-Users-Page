import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { DataTable, ComponentLoadingSpinner } from 'scplus-shared-components';
import { useUsers } from '../hooks/useUsers';

const useStyles = makeStyles(() => ({
  tableContainer: {
    height: '100%',
  },
}));

const ManageUserTable = ({ handleSelectUser }) => {
  const { data, isLoading, isError } = useUsers();

  const classes = useStyles();

  const onCellClick = (userData) => {
    handleSelectUser(userData);
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

export default ManageUserTable;
