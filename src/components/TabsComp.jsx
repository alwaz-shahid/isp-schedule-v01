import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { schedule, scheduleKeys } from '../utils/data';
import SubCard from './datetime/SubCard';

export default function TabsComp() {
  return (
    <Tabs>
      <TabList className='flex justify-evenly min-w-full'>
        {scheduleKeys.map((item, index) => (
          <Tab key={index}>
            <p className='uppercase font-bold px-2 text-3xl'>{item}</p>
          </Tab>
        ))}
      </TabList>
      {scheduleKeys.map((item, index) => (
        <TabPanel className='py-2' key={index}>
          {schedule[item].map((i, ind) => (
            <SubCard
              i={ind}
              dat={schedule[item]}
              key={ind}
              day={item}
              time={i.timing}
              sname={i?.subject?.name}
              teacher={i?.subject?.teacher}
            />
          ))}
        </TabPanel>
      ))}

      {/* <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel> */}
    </Tabs>
  );
}
