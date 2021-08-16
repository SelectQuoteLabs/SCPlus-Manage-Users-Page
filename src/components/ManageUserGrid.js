import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ManageFetchUserData from './ManageFetchUserData';
import ManageUserForm from './ManageUserForm';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
});

export default function SpacingGrid() {
  const [selectedUser, setSelectedUser] = React.useState(null);

  const classes = useStyles();

  const handleSelectedUserChange = (userData) => {
    setSelectedUser(userData);
  };

  return (
    <div className={classes.container}>
      <ManageFetchUserData
        handleSelectedUserChange={handleSelectedUserChange}
      />
      <ManageUserForm selectedUser={selectedUser} />
    </div>
  );
}
