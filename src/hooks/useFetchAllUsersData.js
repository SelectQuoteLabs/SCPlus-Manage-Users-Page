import { useQuery } from 'react-query';

const getUsersData = async () => {
  const userData = await fetch(`http://localhost:8000/DUMMY_USERS_DATA`).then(
    (res) => res.json()
  );

  return userData;
};

export const useFetchAllUsersData = () => {
  return useQuery('userData', getUsersData);
};
