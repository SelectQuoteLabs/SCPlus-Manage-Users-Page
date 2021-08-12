import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Avatar } from 'scplus-shared-components';
import {
  IconButton,
  Tooltip,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import ManageUserForm from './ManageUserForm';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: '0px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    width: '400px',
  },
}));

const SideNavAvtars = ({
  title,
  avatarLetter,
  handleOpenAddUserModal,
  handleCloseAddUserModal,
  open,
}) => {
  const queryClient = useQueryClient();

  const handlePostUserData = (data) => {
    mutation.mutate(data);
  };

  const onSubmitCreateUserData = async (data) => {
    await fetch('http://localhost:8000/DUMMY_USERS_DATA', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  const mutation = useMutation((data) => onSubmitCreateUserData(data), {
    onSuccess: () => {
      handleCloseAddUserModal();
      queryClient.invalidateQueries('userData');
    },
    onError: () => {
      console.log('Opps! Somthing went wrong.');
    },
  });

  const classes = useStyles();

  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleOpenAddUserModal}
      >
        <div>
          <Tooltip title={title}>
            <Avatar isInverted placement="right" arrow={true}>
              {avatarLetter.toUpperCase()}
            </Avatar>
          </Tooltip>
        </div>
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleCloseAddUserModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ManageUserForm handlePostUserData={handlePostUserData} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SideNavAvtars;
