import React, { useEffect, useState } from 'react';
import { getTimeRemaining } from '../../utils/calcTime';

export default function SubCard({ day, time, sname, teacher, dat, i }) {
  const [status, setStatus] = useState('Loading....');
  useEffect(() => {
    let currentStatus = getTimeRemaining(time[0], time[1], day);
    setStatus(currentStatus);
  }, [setStatus]);

  return (
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
            {time[0]}
          </p>
          <p className='text-xl font-bold py-2'>
            <Label name='time end' />
            {time[1]}
          </p>
        </div>
      </div>
      <h3 className='md:text-xl text-sm font-bold uppercase py-2 text-center md:text-right px-2 rounded-md '>
        {status}
      </h3>
    </div>
  );
}

const Label = ({ name }) => {
  return (
    <span className='opacity-70 underline underline-offset-2 px-2 text-sm italic font-bold'>
      {name}:{' '}
    </span>
  );
};
