import Head from 'next/head';
import Dictionary from '../src/components/Dictionary';
import TabsComp from '../src/components/TabsComp';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Schedule</title>
      </Head>
      <div className='flex flex-col flex-1 p-2'>
        <TabsComp />
      </div>

      <Dictionary />
    </>
  );
}

export async function getStaticProps() {
  return {
    revalidate: 1000000,
    props: {},
  };
}
