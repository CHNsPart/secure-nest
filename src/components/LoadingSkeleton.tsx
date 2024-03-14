import React from 'react';

interface LoadingSkeletonProps {
    height: string;
  }

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ height }) => {
  return (
    <>
      {[1, 2, 3].map((index) => (
        <div key={index} className={`flex flex-row skeleton-loader items-start gap-4 rounded-lg bg-gradient-to-br from-gray-300 to-gray-100 min-w-[${height}rem] px-8 py-6 md:gap-6 min-h-56`}>
        </div>
      ))}
    </>
  );
}

export default LoadingSkeleton;
