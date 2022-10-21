import React, { useEffect } from 'react';
import { now } from '../../utils/dt';

export default function SubCard({ day, time, sname, teacher, dat, i }) {
  useEffect(() => {}, []);
  return (
    <div className=' rounded-md  my-5 bg-red-50 drop-shadow-lg dark:bg-[#0A2239] shadow-lg cardhover'>
      <div className='flex flex-col p-3'>
        <div className='text-2xl'>
          {/* <h3 className='text-2xl font-bold uppercase py-2 bg-indigo-400'>
          {day}
        </h3> */}
          <span className='dark:text-cyan-500 text-red-600 border-2 border-x-red-600 dark:border-cyan-500 p-1 rounded-full  text-sm italic font-bold'>
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

            {time[0]}
          </p>

          {/* <span className='text-xl font-bold p-2'>-</span> */}
          <p className='text-xl font-bold py-2'>
            <Label name='time end' />
            {time[1]}
          </p>
        </div>
      </div>
      <h3 className='md:text-2xl text-sm font-bold uppercase py-2 text-center md:text-right px-2 rounded-md dark:bg-slate-700 bg-indigo-400'>
        {now}
      </h3>
    </div>
  );
}

// <h2 className='text-2xl font-bold py-2'>{sname}</h2>
// <p className='text-xl font-bold pb-4 boder-b-2'>{teacher}</p>
// <div className=' bg-green-200 2 text-lime-700 space-x-5 flex justify-start items-center max-w-[200px] rounded-md px-4'>
//   <p className='text-xl font-bold py-2'>{time[0]}</p>

//   <span className='text-xl font-bold py-2'>-</span>
//   <p className='text-xl font-bold py-2'>{time[1]}</p>
//  <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
// When you look
// <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
//   <span className='relative text-white'>annoyed</span>
// </span>
// all the time, people think that you're busy.
// </blockquote>

const Label = ({ name }) => {
  return (
    <span className='dark:text-cyan-500 text-red-600 text-sm italic font-bold'>
      {name}:{' '}
    </span>
  );
};
