import React, { useEffect } from 'react';
import ThemeToggler from '../ThemeToggler';
import Footer from '../Footer';
import RandQuo from '../Quotes/RandQuo';

export default function Layout({ children }) {
  useEffect(() => {}, []);
  return (
    <div className='min-h-screen min-w-full  justify-start flex-auto flex flex-col mx-auto'>
      <Nav />
      {children}
      <RandQuo />
      <Footer />
    </div>
  );
}

const Nav = () => (
  <nav className='flex justify-between items-center min-w-full  p-2 bg-[#132E32] dark:bg-[#0A2239] px-3 mb-2'>
    <ThemeToggler />
    <h1 className=' md:text-xl text-sm lg:text-2xl font-bold text-white  '>
      (beta)-TimeTable for ADP CS (B)
    </h1>
  </nav>
);
