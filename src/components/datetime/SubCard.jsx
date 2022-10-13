import React from 'react';

export default function SubCard({ day, time, sname, teacher, dat, i }) {
  return (
    <div className='flex flex-col p-5 rounded-md'>
      <div className='text-2xl'>
        {/* <h3 className='text-2xl font-bold uppercase py-2 bg-indigo-400'>
          {day}
        </h3> */}
        <h3 className='text-2xl font-bold'>
          {i + 1}. {sname}
        </h3>
        <h3 className='text-2xl font-bold'>{teacher}</h3>
      </div>
      <div className='flex '>
        <p className='text-xl font-bold py-2'>{time[0]}</p>

        <span className='text-xl font-bold p-2'>-</span>
        <p className='text-xl font-bold py-2'>{time[1]}</p>
      </div>
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
