import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../api/posts/posts.api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await getPosts();
  return posts;
});
