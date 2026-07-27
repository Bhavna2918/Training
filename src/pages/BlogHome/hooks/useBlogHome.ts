import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchPosts } from '../../../store/thunks/posts.thunk';
import { fetchUsers } from '../../../store/thunks/users.thunk';
import { fetchComments } from '../../../store/thunks/comments.thunk';

export const useBlogHome = () => {
  const dispatch = useAppDispatch();
  
  const { data: posts, loading: postsLoading, error: postsError, searchQuery } = useAppSelector(state => state.posts);
  const { data: users, loading: usersLoading } = useAppSelector(state => state.users);
  const { data: comments, loading: commentsLoading } = useAppSelector(state => state.comments);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());
  };

  const isLoading = postsLoading || usersLoading || commentsLoading;
  
  // Filter posts based on debounced search
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Take first 6 posts (or filtered results) to display
  const displayPosts = filteredPosts.slice(0, 6);

  return {
    posts: displayPosts,
    users,
    comments,
    isLoading,
    error: postsError,
    searchQuery,
    handleRetry
  };
};
