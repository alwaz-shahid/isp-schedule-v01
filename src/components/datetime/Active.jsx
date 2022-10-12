import React from 'react';
import { today } from '../../utils/dt';

export default function Active(props) {
  const { day, time, sub } = props;
  return (
    <div className='w-full p-2 bg-sky-700 h-72  rounded'>
      <div className='flex items-center t'>
        <p className='text-2xl font-bold '>{today}</p>
      </div>
    </div>
  );
}
