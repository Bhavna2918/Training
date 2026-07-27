import { createSlice } from '@reduxjs/toolkit';
import type { Comment } from '../../api/comments/comments.types';
import { fetchComments } from '../thunks/comments.thunk';

export interface CommentsState {
  data: Comment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  data: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch comments';
      });
  },
});

export default commentsSlice.reducer;
