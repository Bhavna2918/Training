import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts.slice';
import usersReducer from './slices/users.slice';
import commentsReducer from './slices/comments.slice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
