import React, { useEffect, useState } from 'react';
import { schedule } from '../../utils/data';

export default function SubCard({ data }) {
  const [remainingTime, setRemainingTime] = useState(null);
  const [classStatus, setClassStatus] = useState('upcoming');
  const [nextClassDateTime, setNextClassDateTime] = useState(null);
  const [count, setCount] = useState(0);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDay();
  const todayName = daysOfWeek[today];
  const todayDate = new Date().toLocaleDateString('en-US');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDayClasses = schedule[todayName];
      // alert(todayName, currentDayClasses);
      // alert(currentDayClasses);
      const currentClass = currentDayClasses.find(
        (cls) => cls.timing[0] < getCurrentTime()
      );

      if (!currentClass) {
        // If no class is currently ongoing, find the next class
        const nextClass = getNextClass(schedule, todayName, todayDate);
        if (nextClass) {
          setClassStatus('upcoming');
          setNextClassDateTime(nextClass.timing[0]);
          const secondsRemaining = getSecondsRemaining(
            todayDate,
            nextClass.timing[0]
          );
          setRemainingTime(secondsRemaining);
        } else {
          // No more classes left for the day
          setClassStatus('completed');
          setNextClassDateTime(null);
          setRemainingTime(null);
        }
      } else {
        // A class is currently ongoing
        setClassStatus('ongoing');
        setNextClassDateTime(null);
        const secondsRemaining = getSecondsRemaining(
          todayDate,
          currentClass.timing[1]
        );
        setRemainingTime(secondsRemaining);
      }
    }, 1000);

    setCount((prev) => prev + 1);
    return () => clearInterval(intervalId);
  }, []);

  function getNextClass(schedule, todayName, todayDate) {
    const classes = schedule[todayName];
    for (let i = 0; i < classes.length; i++) {
      const cls = classes[i];
      if (cls.timing[0] > getCurrentTime()) {
        return cls;
      }
    }
    return null;
  }

  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  }

  function getSecondsRemaining(date, time) {
    const dateTime = new Date(`${date} ${time}`);
    const currentTime = new Date();
    const diff = dateTime - currentTime;
    return Math.floor(diff / 1000);
  }

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
      classStatusText = 'No more classes today';
      remainingTimeText = '';
      break;
    default:
      break;
  }
  return (
    <div>
      {count}
      {JSON.stringify(data)}
      {nextClassDateTime || 'none'}
      {classStatusText}
    </div>
  );
}
