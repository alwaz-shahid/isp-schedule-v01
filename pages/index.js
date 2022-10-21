import Head from 'next/head';
import TabsComp from '../src/components/TabsComp';
import RandQuo from '../src/components/zenQuotes/RandQuo';
import ZenCard from '../src/components/zenQuotes/ZenCard';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Schedule</title>
      </Head>
      <div className='flex flex-col space-y-5 flex-1 p-2'>
        <TabsComp />
        {/* <RandQuo /> */}
      </div>
      {/* <ZenCard /> */}
    </>
  );
}

export async function getStaticProps() {
  return {
    revalidate: 1000000,
    props: {},
  };
}
