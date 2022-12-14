const subjects = [
  'Object Oriented Programming',
  'LAB - Object Oriented Programming',
  'Mathematics-II',
  'Discrete Structures',
  'Probability & Statistics',
  'Internet & Web Engineering',
  'Functional EnglishCST-IC',
  'Pakistan Studies',
];

const teachers = [
  'Dr.Hamid Ghous',
  'Dr. Zaib Un Nisa',
  'Azra Aziz',
  'Dr. Muhammad Zahid',
  'Kanwer Kaleem Humayun',
  'Shoaib Hameed',
  'Abdullah Shah',
];

const courses = {
  oop: {
    name: subjects[0],
    teacher: teachers[0],
  },
  laboop: {
    name: subjects[1],
    teacher: teachers[0],
  },
  maths2: {
    name: subjects[2],
    teacher: teachers[1],
  },
  ds: {
    name: subjects[3],
    teacher: teachers[2],
  },
  pAs: {
    name: subjects[4],
    teacher: teachers[3],
  },
  iwe: {
    name: subjects[5],
    teacher: teachers[4],
  },
  fe: {
    name: subjects[6],
    teacher: teachers[5],
  },
  ps: {
    name: subjects[7],
    teacher: teachers[6],
  },
};

export const schedule = {
  mon: [
    {
      subject: courses.oop,
      timing: ['09:00 AM', '10:30 AM'],
    },
    {
      subject: courses.pAs,
      timing: ['10:30 AM', '12:00 PM'],
    },
    {
      subject: courses.iwe,
      timing: ['01:00 PM', '02:30 PM'],
    },
  ],
  tue: [
    {
      subject: courses.iwe,
      timing: ['09:00 AM', '10:30 AM'],
    },
    {
      subject: courses.ds,
      timing: ['10:30 AM', '12:00 PM'],
    },
    {
      subject: courses.laboop,
      timing: ['12:00 PM', '02:30 PM'],
    },
  ],
  wed: [
    { subject: courses.maths2, timing: ['09:00 AM', '10:30 AM'] },
    // {
    //   subject: {
    //     name: 'subjects[2]',
    //     teacher:' teachers[1]',
    //   },
    //   timing: ['09:00 AM', '10:30 AM'],
    // },

    {
      subject: courses.oop,
      timing: ['10:30 AM', '12:00 PM'],
    },
    {
      subject: courses.pAs,
      timing: ['01:00 PM', '02:00 PM'],
    },
    {
      subject: courses.ds,
      timing: ['02:00 PM', '03:00 PM'],
    },
  ],
  thu: [
    {
      subject: courses.ps,
      timing: ['10:30 AM', '12:00 PM'],
    },
    {
      subject: courses.fe,
      timing: ['12:00 PM', '01:30 PM'],
    },
    {
      subject: courses.fe,
      timing: ['01:30 PM', '03:00 PM'],
    },
  ],
};

export const scheduleKeys = Object.keys(schedule);
