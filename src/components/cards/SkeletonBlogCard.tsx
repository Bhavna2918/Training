import React from 'react';

export const SkeletonBlogCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-border-subtle shadow-sm overflow-hidden flex flex-col h-[420px] animate-pulse">
      <div className="h-[200px] w-full bg-gray-200"></div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
        <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        
        <div className="mt-auto pt-4 border-t border-border-subtle/50 flex justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="h-8 bg-gray-200 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};
