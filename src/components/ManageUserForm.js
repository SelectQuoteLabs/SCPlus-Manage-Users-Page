import React from 'react';
import * as Yup from 'yup';
import { SQFormTextField, SQForm, SQFormButton } from '@selectquotelabs/sqform';
import { Grid, Card } from '@material-ui/core';

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
    <Card style={{ padding: 16 }}>
      <SQForm
        initialValues={MOCK_DATA}
        onSubmit={handleUserPostSubmit}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        <SQFormTextField
          name="userName"
          label="User Name"
          size={12}
          maxCharacters={10}
        />
        <SQFormTextField name="userComment" label="User Comment" size={12} />
        <Grid item sm={12}>
          <Grid container justify="space-between">
            <SQFormButton>Submit</SQFormButton>
          </Grid>
        </Grid>
      </SQForm>
    </Card>
  );
};

export default ManageUserForm;
