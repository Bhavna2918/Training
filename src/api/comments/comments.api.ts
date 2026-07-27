import { apiClient } from '../config/axios';
import type { Comment } from './comments.types';

export const getComments = async (): Promise<Comment[]> => {
  const response = await apiClient.get<Comment[]>('/comments');
  return response.data;
};
