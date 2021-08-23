import React from 'react';
import * as Yup from 'yup';
import {
  SQFormTextField,
  SQFormScrollableCard,
  SQFormButton,
} from '@selectquotelabs/sqform';
import { Grid } from '@material-ui/core';
import { useUpdateUser } from '../hooks/useUpdateUser';
import { useCreateDialog } from '../context/CreateDialogContext';

const validationSchema = {
  userName: Yup.string().required('Required'),
  userComment: Yup.string().required('Required'),
};

const ManageUserDetails = ({ selectedUser, handlePostUserData }) => {
  const [getDialogState, { closeDialog }] = useCreateDialog();
  const isCreateDialogOpen = getDialogState('/manage-users');
  const { id: userID } = selectedUser || {};
  const updateUser = useUpdateUser(userID);
  const handleUpdateUser = (data) => {
    updateUser.mutateAsync(data);
  };
  const handleUserPostSubmit = (data) => {
    if (handlePostUserData) {
      handlePostUserData(data);
    } else {
      handleUpdateUser(data);
    }
  };

  const MOCK_DATA = {
    userName: selectedUser?.userName ?? '',
    userComment: selectedUser?.userComment ?? '',
  };

  return (
    <SQFormScrollableCard
      title={'Update User'}
      initialValues={MOCK_DATA}
      onSubmit={handleUserPostSubmit}
      enableReinitialize={true}
      validationSchema={validationSchema}
      isSelfBounding={true}
      shouldRenderHelperText={false}
      isOpen={isCreateDialogOpen}
      closeDialog={closeDialog}
    >
      <SQFormTextField
        name="userName"
        label="User Name"
        size={12}
        maxCharacters={15}
      />
      <SQFormTextField name="userComment" label="User Comment" size={12} />
    </SQFormScrollableCard>
  );
};

export default ManageUserDetails;
