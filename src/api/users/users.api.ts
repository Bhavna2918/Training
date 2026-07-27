import { apiClient } from '../config/axios';
import type { User } from './users.types';

export const getUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/users');
  return response.data;
};
