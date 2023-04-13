const subjects = [
  'Database System - Lab',
  'Data Structure & Algorithms',
  'Database System',
  'Islamic Studies',
  'Communication & Presentation Skills',
  'Computer Organization & Assembly Language - LAB',
  'Computer organization & Assembly language',
  'Data Structures & Algorithms - LAB',
];

const teachers = [
  'Rabeea Riaz Ahmad',
  'Qasim Niaz',
  'Dr. Sonia Batool',
  'Saba Mohy-Ud-Din',
  'Zeeshan Ali',
];

const courses = {
  dbsLab: {
    name: subjects[0],
    teacher: teachers[0],
  },
  dsa: {
    name: subjects[1],
    teacher: teachers[1],
  },
  dbs: {
    name: subjects[2],
    teacher: teachers[0],
  },
  islamicStudies: {
    name: subjects[3],
    teacher: teachers[2],
  },
  commSkills1: {
    name: subjects[4],
    teacher: teachers[3],
  },
  coaLab: {
    name: subjects[5],
    teacher: teachers[4],
  },
  coa: {
    name: subjects[6],
    teacher: teachers[4],
  },
  dsaLab: {
    name: subjects[7],
    teacher: teachers[1],
  },
};

export const schedule = {
  mon: [
    {
      subject: courses.dbsLab,
      timing: ['09:00 AM', '10:30 AM'],
    },
    {
      subject: courses.dsa,
      timing: ['01:00 PM', '02:30 PM'],
    },
  ],
  tue: [
    {
      subject: courses.islamicStudies,
      timing: ['09:00 AM', '10:30 AM'],
    },
    {
      subject: courses.dbs,
      timing: ['10:30 AM', '12:00 PM'],
    },
    {
      subject: courses.commSkills1,
      timing: ['01:00 PM', '02:30 PM'],
    },
  ],
  wed: [
    {
      subject: courses.commSkills1,
      timing: ['09:00 AM', '10:30 AM'],
    },
    {
      subject: courses.dbs,
      timing: ['10:30 AM', '12:00 PM'],
    },
  ],
  thu: [
    {
      subject: courses.coa,
      timing: ['09:00 AM', '10:30 AM'],
    },
    {
      subject: courses.coaLab,
      timing: ['12:00 PM', '02:30 PM'],
    },
  ],
  fri: [
    {
      subject: courses.coa,
      timing: ['09:00 AM', '10:30 AM'],
    },
    {
      subject: courses.dsa,
      timing: ['10:30 AM', '12:00 PM'],
    },
    {
      subject: courses.dsaLab,
      timing: ['12:00 PM', '02:30 PM'],
    },
  ],
};

export const scheduleKeys = Object.keys(schedule);
