import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments } from '../../api/comments/comments.api';

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const comments = await getComments();
  return comments;
});
