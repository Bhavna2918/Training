import React from 'react';
import { BlogCard } from '../../../components/cards/BlogCard';
import { SkeletonBlogCard } from '../../../components/cards/SkeletonBlogCard';
import { Button } from '../../../components/elements/Button';
import type { Post } from '../../../api/posts/posts.types';
import type { User } from '../../../api/users/users.types';
import type { Comment } from '../../../api/comments/comments.types';

import blog1 from '../../../assets/images/blog-1.jpeg';
import blog2 from '../../../assets/images/blog-2.jpeg';
import blog3 from '../../../assets/images/blog-3.jpeg';
import blog4 from '../../../assets/images/blog-4.jpeg';
import blog5 from '../../../assets/images/blog-5.jpeg';
import blog6 from '../../../assets/images/blog-6.jpeg';

export const STATIC_CARDS = [
  {
    title: 'What Makes a Good API Great?',
    description: 'Explore the key principles that separate great APIs from the rest.',
    category: 'API DESIGN',
    date: 'May 20, 2024',
    readTime: 8,
    image: blog1
  },
  {
    title: '5 Ways to Improve API Performance',
    description: 'Practical tips to make your APIs faster and more reliable.',
    category: 'ENGINEERING',
    date: 'May 18, 2024',
    readTime: 6,
    image: blog2
  },
  {
    title: 'Building a Culture of API Collaboration',
    description: 'How teams can work better together throughout the API lifecycle.',
    category: 'CULTURE',
    date: 'May 16, 2024',
    readTime: 7,
    image: blog3
  },
  {
    title: 'Getting Started with the TryLity API Platform',
    description: 'A step-by-step guide to build, test, and document your first API.',
    category: 'TUTORIALS',
    date: 'May 14, 2024',
    readTime: 9,
    image: blog4
  },
  {
    title: 'API Versioning Best Practices',
    description: 'Learn how to version your APIs without breaking your users.',
    category: 'API DESIGN',
    date: 'May 12, 2024',
    readTime: 6,
    image: blog5
  },
  {
    title: 'Monitoring APIs in Production',
    description: 'Tools and techniques to monitor and keep your APIs healthy.',
    category: 'ENGINEERING',
    date: 'May 10, 2024',
    readTime: 8,
    image: blog6
  }
];

interface BlogListProps {
  posts: Post[];
  users: User[];
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  onRetry: () => void;
}

export const BlogList: React.FC<BlogListProps> = ({
  posts,
  users,
  isLoading,
  error,
  searchQuery,
  onRetry
}) => {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-red-500 font-medium mb-4">{error}</p>
        <Button onClick={onRetry}>Retry Fetching Data</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
      {isLoading ? (
        Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonBlogCard key={idx} />
        ))
      ) : posts.length > 0 ? (
        posts.map((post, index) => {
          // If we exceed 6, cycle or fallback for images and category
          const staticData = STATIC_CARDS[index % STATIC_CARDS.length];
          const author = users.find(u => u.id === post.userId);
          
          return (
            <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${(index % 10) * 50}ms` }}>
              <BlogCard 
                title={post.title}
                description={post.body}
                category={staticData.category}
                date={staticData.date}
                readTime={staticData.readTime}
                image={staticData.image}
                authorName={author ? author.name : 'Unknown Author'}
              />
            </div>
          );
        })
      ) : (
        <div className="col-span-full py-20 text-center text-[#6B7280]">
          No posts found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
};
