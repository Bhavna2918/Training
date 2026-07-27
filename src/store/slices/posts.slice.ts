import { createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../api/posts/posts.types';
import { fetchPosts } from '../thunks/posts.thunk';

export interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
  searchQuery: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export const { setSearchQuery } = postsSlice.actions;
export default postsSlice.reducer;
