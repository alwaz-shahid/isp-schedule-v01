import React, { useEffect, useState } from 'react';
import { now, getSecondsRemaining } from '../../utils/dt';

export default function SubCard({ day, time, sname, teacher, dat, i }) {
  const [remainingTime, setRemainingTime] = useState(null);
  const [classStatus, setClassStatus] = useState('upcoming');
  const [nextClassDateTime, setNextClassDateTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const secondsRemaining = getSecondsRemaining(dat, time[0]);
      setRemainingTime(secondsRemaining);

      if (secondsRemaining < 0 && classStatus === 'upcoming') {
        setClassStatus('ongoing');
      } else if (secondsRemaining >= 0 && classStatus === 'ongoing') {
        setClassStatus('completed');
      }

      if (classStatus === 'completed') {
        const nextClassDate = new Date(dat);
        nextClassDate.setDate(nextClassDate.getDate() + 1);
        const nextClassTime = `${time[0]} ${day}`;
        const nextClassDateTime = new Date(
          `${nextClassDate.toDateString()} ${nextClassTime}`
        );
        setNextClassDateTime(nextClassDateTime);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dat, time, classStatus]);

  let classStatusText = '';
  let remainingTimeText = '';

  switch (classStatus) {
    case 'upcoming':
      classStatusText = 'Class starts in';
      remainingTimeText = `${Math.floor(
        Math.abs(remainingTime) / 3600
      )} hours ${Math.floor(Math.abs(remainingTime) / 60) % 60} minutes`;
      break;
    case 'ongoing':
      classStatusText = 'Class is ongoing';
      remainingTimeText = '';
      break;
    case 'completed':
      classStatusText = 'Next class';
      remainingTimeText = nextClassDateTime.toLocaleString([], {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
      break;
    default:
      break;
  }

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
        {classStatusText} {remainingTimeText}
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
