import Head from 'next/head';
import TabsComp from '../src/components/TabsComp';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Schedule</title>
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
