// https://github.com/alwaz-shahid/isp-schedule-v01.git

import moment from 'moment';

let now = moment().format('dddd, Do MMMM YYYY, h:mm a');
let today = moment().format('HH:mm A');

let tomorrow = moment().add(1, 'days');

let yesterday = moment().add(-1, 'days');
function getSecondsRemaining(start, end) {
  const now = new Date();
  const startTime = new Date(now.toDateString() + ' ' + start);
  const endTime = new Date(now.toDateString() + ' ' + end);
  let secondsRemaining;

  if (now < startTime) {
    // Lecture hasn't started yet
    secondsRemaining = Math.floor((startTime - now) / 1000);
  } else if (now < endTime) {
    // Lecture is in progress
    secondsRemaining = Math.floor((endTime - now) / 1000);
  } else {
    // Lecture has ended
    secondsRemaining = 0;
  }

  return secondsRemaining;
}

export { today, tomorrow, yesterday, now, getSecondsRemaining };
