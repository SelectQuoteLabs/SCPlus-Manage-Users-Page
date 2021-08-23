import React from 'react';
import { makeStyles } from '@material-ui/core';
import ManageUserTable from '../src/components/ManageUserTable';
import ManageUserDetails from '../src/components/ManageUserDetails';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  container: {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
});

export default function ManageUsers() {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const handleSelectUser = (userData) => {
    setSelectedUser(userData);
  };
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ManageUserTable handleSelectUser={handleSelectUser} />
      <ManageUserDetails selectedUser={selectedUser} />
    </div>
  );
}
