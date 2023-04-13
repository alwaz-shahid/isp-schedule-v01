export function getTimeRemaining(targetTime, targetDay) {
  // Create a date object for the target time
  const targetDate = new Date();
  const [targetHour, targetMinute] = targetTime.split(':');
  targetDate.setHours(parseInt(targetHour), parseInt(targetMinute), 0, 0);

  // Calculate the difference between the target time and the current time
  const currentDate = new Date();
  const timeDiff = targetDate.getTime() - currentDate.getTime();

  // If the target time has already passed for the current day, add a week to the target date
  if (timeDiff < 0) {
    targetDate.setDate(targetDate.getDate() + 7);
  }

  // Set the target date to the next occurrence of the target day
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const targetDayIndex = daysOfWeek.indexOf(targetDay);
  let remainingDays = targetDayIndex - currentDate.getDay();
  if (remainingDays <= 0) {
    remainingDays += 7;
  }
  targetDate.setDate(currentDate.getDate() + remainingDays);

  // Calculate the time remaining until the target time
  const remainingTime = targetDate.getTime() - currentDate.getTime();
  const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
  const remainingMinutes = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );

  // Return a string indicating the time remaining or that the time is ongoing
  if (remainingTime > 0) {
    return `${remainingHours} hours and ${remainingMinutes} minutes remaining until ${targetTime} on ${targetDay}.`;
  } else if (remainingTime < 0) {
    return `The target time for ${targetTime} on ${targetDay} has already passed.`;
  } else {
    return `It is currently ${targetTime} on ${targetDay}.`;
  }
}
