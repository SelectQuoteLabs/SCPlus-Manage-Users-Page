import React from 'react';
import { Avatar, ComponentLoadingSpinner } from 'scplus-shared-components';
import { SQFormDialog, SQFormTextField } from '@selectquotelabs/sqform';
import {
  IconButton,
  Tooltip,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import ManageUserDetails from './ManageUserDetails';
import { useCreateUser } from '../hooks/useCreateUser';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: '0px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    width: '400px',
  },
}));

const INITIAL_VALUES = {
  userName: '',
  userComment: '',
};

const ManageAddUser = ({ title, avatarLetter, isOpen, closeDialog }) => {
  const addUserData = useCreateUser();
  const handlePostUserData = async (data) => {
    await addUserData.mutateAsync(data);

    if (addUserData.isSuccess) {
      closeDialog();
    }
  };

  const classes = useStyles();

  return (
    <>
      <SQFormDialog
        initialValues={INITIAL_VALUES}
        onSave={handlePostUserData}
        isOpen={isOpen}
        onClose={closeDialog}
        title={'Add User'}
        enableReinitialize
      >
        {addUserData.isLoading ? (
          <ComponentLoadingSpinner message="Loading" />
        ) : (
          <>
            <SQFormTextField
              name="userName"
              label="User Name"
              size={12}
              maxCharacters={15}
            />
            <SQFormTextField
              name="userComment"
              label="User Comment"
              size={12}
            />
          </>
        )}
      </SQFormDialog>
    </>
  );
};

export default ManageAddUser;
