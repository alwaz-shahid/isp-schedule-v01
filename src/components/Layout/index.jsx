import React from 'react';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen min-w-full flex justify-start items-center space-x-4 space-y-4 '>
      {children}
    </div>
  );
}
