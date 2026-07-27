import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../api/users/users.api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await getUsers();
  return users;
});
