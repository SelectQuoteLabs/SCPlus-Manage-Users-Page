import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ManageUserAccordion from './ManageUserAccordion';
import ManageUserForm from './ManageUserForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  control: {
    padding: theme.spacing(10),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(1);
  const [selectedUser, setSelectedUser] = React.useState(null);

  const classes = useStyles();

  const handleSelectedUserChange = (user) => {
    setSelectedUser(user);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <Grid item md={6} sm={12} xs={12}>
            <ManageUserAccordion
              handleSelectedUserChange={handleSelectedUserChange}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <ManageUserForm selectedUser={selectedUser} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
