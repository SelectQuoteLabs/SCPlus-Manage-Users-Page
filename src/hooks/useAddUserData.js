import { useMutation, useQueryClient } from 'react-query';

const onSubmitCreateUserData = async (userData) => {
  await fetch('http://localhost:8000/DUMMY_USERS_DATA', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
};

export const useAddUserData = () => {
  const queryClient = useQueryClient();

  return useMutation((userData) => onSubmitCreateUserData(userData), {
    onSuccess: () => {
      queryClient.invalidateQueries('userData');
    },
    onError: () => {
      console.log('Opps! Somthing went wrong.');
    },
  });
};
