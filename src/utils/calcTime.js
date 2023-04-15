export function getTimeRemaining(startTime, endTime, targetDay) {
  // Create date objects for the target start and end times
  const startDate = new Date();
  const [startHour, startMinute] = startTime.split(':');
  startDate.setHours(parseInt(startHour), parseInt(startMinute), 0, 0);

  const endDate = new Date();
  const [endHour, endMinute] = endTime.split(':');
  endDate.setHours(parseInt(endHour), parseInt(endMinute), 0, 0);

  // Calculate the difference between the target start and end times and the current time
  const currentDate = new Date();
  const startTimeDiff = startDate.getTime() - currentDate.getTime();
  const endTimeDiff = endDate.getTime() - currentDate.getTime();

  // If the target start time has already passed for the current day, add a week to the target date
  if (startTimeDiff < 0) {
    startDate.setDate(startDate.getDate() + 7);
    endDate.setDate(endDate.getDate() + 7);
  }

  // Set the target date to the next occurrence of the target day
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const targetDayIndex = daysOfWeek.indexOf(targetDay);
  let remainingDays = targetDayIndex - currentDate.getDay();
  if (remainingDays <= 0) {
    remainingDays += 7;
  }
  startDate.setDate(currentDate.getDate() + remainingDays);
  endDate.setDate(currentDate.getDate() + remainingDays);

  // Calculate the time remaining until the start time
  const remainingStartTime = startDate.getTime() - currentDate.getTime();
  const startHours = Math.floor(remainingStartTime / (1000 * 60 * 60));
  const startMinutes = Math.floor(
    (remainingStartTime % (1000 * 60 * 60)) / (1000 * 60)
  );

  // Calculate the time remaining until the end time
  const remainingEndTime = endDate.getTime() - currentDate.getTime();
  const endHours = Math.floor(remainingEndTime / (1000 * 60 * 60));
  const endMinutes = Math.floor(
    (remainingEndTime % (1000 * 60 * 60)) / (1000 * 60)
  );

  // Determine the state of the class
  let state = '';
  if (remainingEndTime > 0) {
    state = 'upcoming';
  } else if (remainingEndTime < 0 && remainingStartTime > 0) {
    state = 'ongoing';
  } else {
    state = 'finished';
  }
  // if (startHours > 36) {
  //   return `Next class on ${targetDay}.`;
  // }
  if (state === 'upcoming') {
    // Return a string indicating the time remaining or the state of the class
    return `${startHours} hours and ${startMinutes} minutes remaining until ${startTime}-${endTime} on ${targetDay}.`;
  } else if (state === 'ongoing') {
    return `The class ${startTime}-${endTime} on ${targetDay} is currently ongoing.`;
  } else {
    return `The class ${startTime}-${endTime} on ${targetDay} has ended.`;
  }
}

// export function getTimeRemaining(targetTime, targetDay) {
//   // Create a date object for the target time
//   const targetDate = new Date();
//   const [targetHour, targetMinute] = targetTime.split(':');
//   targetDate.setHours(parseInt(targetHour), parseInt(targetMinute), 0, 0);

//   // Calculate the difference between the target time and the current time
//   const currentDate = new Date();
//   const timeDiff = targetDate.getTime() - currentDate.getTime();

//   // If the target time has already passed for the current day, add a week to the target date
//   if (timeDiff < 0) {
//     targetDate.setDate(targetDate.getDate() + 7);
//   }

//   // Set the target date to the next occurrence of the target day
//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const targetDayIndex = daysOfWeek.indexOf(targetDay);
//   let remainingDays = targetDayIndex - currentDate.getDay();
//   if (remainingDays <= 0) {
//     remainingDays += 7;
//   }
//   targetDate.setDate(currentDate.getDate() + remainingDays);

//   // Calculate the time remaining until the target time
//   const remainingTime = targetDate.getTime() - currentDate.getTime();
//   const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
//   const remainingMinutes = Math.floor(
//     (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
//   );

//   // Return a string indicating the time remaining or that the time is ongoing
//   if (remainingTime > 0) {
//     return `${remainingHours} hours and ${remainingMinutes} minutes remaining until ${targetTime} on ${targetDay}.`;
//   } else if (remainingTime < 0) {
//     return `The target time for ${targetTime} on ${targetDay} has already passed.`;
//   } else {
//     return `It is currently ${targetTime} on ${targetDay}.`;
//   }
// }
