import Head from 'next/head';
import TabsComp from '../src/components/TabsComp';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Schedule</title>
        <description>Home page</description>
      </Head>
      <div className='flex flex-col space-y-5 flex-1 p-2'>
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

// import { schedule, scheduleKeys } from '../src/utils/data';

// const scheduleValues = Object.values(schedule);

// const scheduleEntries = Object.entries(schedule);
