import React from 'react';
import ThemeToggler from '../ThemeToggler';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen min-w-full flex flex-col '>
      <Nav />
      {children}
    </div>
  );
}

const Nav = () => (
  <nav className='flex justify-between items-center w-full flex-1 p-2 bg-indigo-500 h-10'>
    <ThemeToggler />
  </nav>
);
