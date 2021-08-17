import React from 'react';
import * as Yup from 'yup';
import {
  SQFormTextField,
  SQFormScrollableCard,
  SQFormButton,
} from '@selectquotelabs/sqform';
import { Grid } from '@material-ui/core';

const validationSchema = {
  userName: Yup.string().required('Required'),
  userComment: Yup.string().required('Required'),
};

const ManageUserForm = ({ selectedUser, handlePostUserData }) => {
  const handleUserPostSubmit = (data) => {
    if (handlePostUserData) {
      handlePostUserData(data);
      console.log('submited', data);
    } else {
      console.log('Updated: ', data);
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

export default ManageUserForm;
