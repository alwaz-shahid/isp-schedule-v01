import { useState, useEffect } from 'react';
import { schedule, scheduleKeys, courses } from '../utils/data';

const getNextClass = () => {
  const today = new Date();
  const todayDay = today
    .toLocaleString('default', { weekday: 'short' })
    .toLowerCase();

  const todayClasses = schedule[todayDay];
  if (!todayClasses) return null;

  const now = today.getTime();
  let nextClass = null;
  for (const classObj of todayClasses) {
    const [startHour, startMinute] = classObj.timing[0].split(':');
    const classStart = new Date(today);
    classStart.setHours(Number(startHour), Number(startMinute), 0);

    if (now < classStart.getTime()) {
      nextClass = classObj;
      break;
    }
  }

  return nextClass;
};

const getSecondsRemaining = (nextClass) => {
  if (!nextClass) return null;

  const [startHour, startMinute] = nextClass.timing[0].split(':');
  const classStart = new Date();
  classStart.setHours(Number(startHour), Number(startMinute), 0);
  return Math.floor((classStart.getTime() - Date.now()) / 1000);
};

const TimeRemaining = () => {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [nextClass, setNextClass] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextClass = getNextClass();
      const secondsRemaining = getSecondsRemaining(nextClass);
      setNextClass(nextClass);
      setTimeRemaining(secondsRemaining);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (!nextClass || timeRemaining === null) return null;

  const hoursRemaining = Math.floor(timeRemaining / 3600);
  const minutesRemaining = Math.floor((timeRemaining % 3600) / 60);

  if (hoursRemaining === 0 && minutesRemaining === 0) {
    return (
      <div>
        <p>
          Class {nextClass.subject.name} with {nextClass.subject.teacher} starts
          now
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>
        Class {nextClass.subject.name} with {nextClass.subject.teacher} starts
        in {hoursRemaining} hours {minutesRemaining} minutes
      </p>
    </div>
  );
};

export default TimeRemaining;
