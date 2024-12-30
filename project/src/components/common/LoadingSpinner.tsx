import React from 'react';

export const LoadingSpinner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600 h-8 w-8 ${className}`} />
  );
};