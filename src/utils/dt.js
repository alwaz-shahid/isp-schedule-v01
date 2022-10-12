// https://github.com/alwaz-shahid/isp-schedule-v01.git

import moment from 'moment';

let today = moment().format('dddd HH:mm A');

let tomorrow = moment().add(1, 'days');

let yesterday = moment().add(-1, 'days');

export { today, tomorrow, yesterday };
