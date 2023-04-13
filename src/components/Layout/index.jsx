<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { now, getSecondsRemaining } from '../../utils/dt';

export default function SubCard({ day, time, sname, teacher, dat, i }) {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const secondsRemaining = getSecondsRemaining(dat, time[0]);
      setRemainingTime(secondsRemaining);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dat, time]);

  const getClassStatus = () => {
    if (remainingTime !== null) {
      if (remainingTime < 0) {
        return 'CLASS ENDED';
      }
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      return `CLASS STARTS IN ${hours} HOURS ${minutes} MINUTES`;
    }
    return 'NEXT CLASS TOMORROW';
  };
=======
import React, { useEffect } from 'react';
import ThemeToggler from '../ThemeToggler';
>>>>>>> parent of df4de49 (new look and time)

  return (
<<<<<<< HEAD
    <div className=' rounded-md  my-5 bg-red-50 drop-shadow-lg dark:bg-[#0A2239] shadow-lg cardhover'>
      <div className='flex flex-col p-3'>
        <div className='text-2xl'>
          <span className=' p-1 rounded-full  text-sm italic font-bold'>
            {' '}
            {i + 1}
          </span>

          <h3 className='text-2xl font-bold '>
            <Label name='subject' />
            {sname}
          </h3>
          <h3 className='text-2xl font-bold  '>
            <Label name='teacher' />
            {teacher}
          </h3>
        </div>
        <div className='flex flex-col  p-4'>
          <p className='text-xl font-bold py-2 inline-block mb-2'>
            <Label name='time start' />
            {time && time[0]}
          </p>
          <p className='text-xl font-bold py-2'>
            <Label name='time end' />
            {time && time[1]}
          </p>
        </div>
      </div>
      <h3 className='md:text-xl text-sm font-bold uppercase py-2 text-center md:text-right px-2 rounded-md '>
        {getClassStatus()}
      </h3>
=======
    <div className='min-h-screen min-w-full flex flex-col mx-auto'>
      <Nav />
      {children}
>>>>>>> parent of df4de49 (new look and time)
    </div>
  );
}

<<<<<<< HEAD
const Label = ({ name }) => {
  return (
    <span className='opacity-70 underline underline-offset-2 px-2 text-sm italic font-bold'>
      {name}:{' '}
    </span>
  );
};
=======
const Nav = () => (
  <nav className='flex justify-between items-center w-full  p-2 bg-[#132E32] dark:bg-[#0A2239] px-3 mb-2'>
    <ThemeToggler />
    <h1 className=' md:text-xl text-sm lg:text-2xl font-bold dark:text-red-500 text-indigo-600  '>
      (beta)-TimeTable for ADP CS (B)
    </h1>
  </nav>
);
>>>>>>> parent of df4de49 (new look and time)
