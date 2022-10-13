import { ThemeProvider } from 'next-themes';
import React from 'react';
import SubCard from './SUbCard';

export default function TableOne(props) {
  const { day, time, sname, teacher, dat } = props;

  return (
    <div className='flex flex-col justify-start items-center min-w-full flex-1 p-5  border-2 rounded-xl'>
      <SubCard sname={sname} teacher={teacher} time={time} />
    </div>
  );
}
