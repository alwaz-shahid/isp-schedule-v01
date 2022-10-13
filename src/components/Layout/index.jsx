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
  <nav className='flex justify-between items-center w-full  p-2 bg-sky-900 h-12 px-3'>
    <ThemeToggler />
    <h1 className=' md:text-xl text-sm lg:text-2xl font-bold text-white'>
      TimeTable for ADP CS (B)
    </h1>
  </nav>
);
