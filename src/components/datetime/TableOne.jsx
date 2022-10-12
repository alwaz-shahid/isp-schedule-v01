import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function TableOne(props) {
  const { day, time, sname, teacher, dat } = props;

  return (
    <div className='flex flex-col justify-start items-center w-full flex-1 p-5 text-green-500 border-2 rounded-xl'>
      <div className='w-fll text-start'>
        <p className='block w-full text-start uppercase p-2 font-bold'>{day}</p>
        <div className='whitespace-pre-line text-2xl font-bold'>
          <p>{sname}</p>
          <p>{teacher}</p>
          <p className='font-bold py-2'>{time[0]}</p>
          <p className='font-bold py-2'>{time[1]}</p>
          {/* <p>{}</p> */}
        </div>
        {/* {JSON.stringify(dat)} */}
      </div>
    </div>
  );
}
