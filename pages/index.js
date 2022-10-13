import { NextSeo } from 'next-seo';
// import { useEffect } from 'react';

import TabsComp from '../src/components/TabsComp';
// import { schedule, scheduleKeys } from '../src/utils/data';

export default function Home() {
  // const scheduleValues = Object.values(schedule);

  // const scheduleEntries = Object.entries(schedule);

  return (
    <>
      <div className='flex flex-col space-y-5 flex-1 p-2'>
        <NextSeo title='Home' />
        {/* {JSON.stringify(scheduleKeys)} */}
        <TabsComp />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    revalidate: 1000000,
    props: {},
  };
}

// <TableOne
// dat={schedule[item]}
// key={ind}
// day={item}
// time={i.timing}
// sname={i?.subject?.name}
// teacher={i?.subject?.teacher}
// />
