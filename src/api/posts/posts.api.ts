import { apiClient } from '../config/axios';
import type { Post } from './posts.types';

export const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts');
  return response.data;
};
