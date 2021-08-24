import { useMutation, useQueryClient } from 'react-query';

const onSubmitUpdateUserData = async (userData, userID) => {
  console.log('User Id:', userData);
  await fetch(`http://localhost:8000/DUMMY_USERS_DATA/${userID}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
};

export const useUpdateUser = (userID) => {
  const queryClient = useQueryClient();

  return useMutation((userData) => onSubmitUpdateUserData(userData, userID), {
    onError: (error) => {
      console.log('Opps! Somthing wennnnnt wrong.', error);
    },
    onSettled: () => {
      queryClient.invalidateQueries('userData');
    },
  });
};
