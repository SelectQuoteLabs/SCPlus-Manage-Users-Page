import React from 'react';
import { makeStyles } from '@material-ui/core';
import ManageUserGrid from '../../src/components/ManageUserGrid';

const useStyles = makeStyles({
  root: {
    height: '400px',
    width: '100%',
    display: 'flex',
  },
});

export default function ManageUsers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ManageUserGrid />
    </div>
  );
}
