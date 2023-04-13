import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function SubCard({ day, time, sname, teacher, i }) {
const [remainingTime, setRemainingTime] = useState(null);
const [classStatus, setClassStatus] = useState('upcoming');
const [nextClassDateTime, setNextClassDateTime] = useState(null);

useEffect(() => {
const intervalId = setInterval(() => {
const now = moment();
const today = now.format('YYYY-MM-DD');
const classStart = moment`(${today} ${time[0]} ${day}`);
const classEnd = moment(`${today} ${time[1]} ${day}`);
if (now.isBefore(classStart)) {
  const diff = classStart.diff(now, 'seconds');
  setRemainingTime(diff);
  setClassStatus('upcoming');
} else if (now.isBetween(classStart, classEnd)) {
  setRemainingTime(null);
  setClassStatus('ongoing');
} else {
  const nextClass = moment(`${today} ${time[0]} ${moment(day).add(1, 'day').format('dddd')}`);
  setNextClassDateTime(nextClass);
  setClassStatus('completed');
}
}, 1000);

return () => clearInterval(intervalId);
}, [day, time]);

let classStatusText = '';
let remainingTimeText = '';

switch (classStatus) {
case 'upcoming':
classStatusText = 'Class starts in';
remainingTimeText = ${Math.floor( Math.abs(remainingTime) / 3600 )} hours ${Math.floor(Math.abs(remainingTime) / 60) % 60} minutes;
break;
case 'ongoing':
classStatusText = 'Class is ongoing';
break;
case 'completed':
classStatusText = 'Next class';
remainingTimeText = nextClassDateTime.format('dddd, MMMM Do, h:mm A');
break;
default:
break;
}

return (
<div className='rounded-md my-5 bg-red-50 drop-shadow-lg dark:bg-[#0A2239] shadow-lg cardhover'>
<div className='flex flex-col p-3'>
<div className='text-2xl'>
<span className='p-1 rounded-full text-sm italic font-bold'>
{i + 1}
</span>
<h3 className='text-2xl font-bold'>
<Label name='subject' />
{sname}
</h3>
<h3 className='text-2xl font-bold'>
<Label name='teacher' />
{teacher}
</h3>
</div>
<div className='flex flex-col p-4'>
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
<h3 className='md:text-xl text-sm font-bold uppercase py-2 text-center md:text-right px-2 rounded-md'>
{classStatusText} {remainingTimeText}
</h3>
</div>
);
}
