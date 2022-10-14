// https://github.com/alwaz-shahid/isp-schedule-v01.git

import moment from 'moment';

let now = moment().format('dddd, Do MMMM YYYY, h:mm a');
let today = moment().format('HH:mm A');

let tomorrow = moment().add(1, 'days');

let yesterday = moment().add(-1, 'days');

export { today, tomorrow, yesterday, now };
