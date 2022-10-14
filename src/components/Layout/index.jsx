import React, { useEffect } from 'react';
import ThemeToggler from '../ThemeToggler';

export default function Layout({ children }) {
  useEffect(() => {}, []);
  return (
    <div className='min-h-screen min-w-full flex flex-col mx-auto'>
      <Nav />
      {children}
    </div>
  );
}

const Nav = () => (
  <nav className='flex justify-between items-center w-full  p-2 bg-[#132E32] dark:bg-[#0A2239] px-3'>
    <ThemeToggler />
    <h1 className=' md:text-xl text-sm lg:text-2xl font-bold dark:text-red-500 text-indigo-600  '>
      TimeTable for ADP CS (B)
    </h1>
  </nav>
);
