import { NextSeo } from 'next-seo';
import Active from '../src/components/datetime/Active';
import TableOne from '../src/components/datetime/TableOne';
import { schedule } from '../src/utils/data';

export default function Home() {
  const scheduleKeys = Object.keys(schedule);

  const scheduleValues = Object.values(schedule);

  const scheduleEntries = Object.entries(schedule);
  return (
    <>
      <div className='flex flex-col justify-start items-center flex-1 p-2'>
        <NextSeo title='Home' />
        {/* <TableOne day='Monday' time='10:00' sname='Maths' teacher={'ff'} /> */}
        {/* <Active /> */}
        {scheduleKeys.map((item, index) =>
          schedule[item].map((i, ind) => (
            <TableOne
              dat={schedule[item]}
              key={ind}
              day={item}
              time={i.timing}
              sname={i?.subject?.name}
              teacher={i?.subject?.teacher}
            />
          ))
        )}
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
