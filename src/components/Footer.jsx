import React from 'react';

export default function Footer() {
  return (
    <footer className='min-h-[282] bg-black text-yellow-50 text-xl p-5 space-y-5'>
      <h1 className='hover:underline text-base px-3 py-2 rounded-md bg-red-500 max-w-fit'>
        Beta
      </h1>
      <h3 className='hover:underline text-base'>Help</h3>
      <h3 className='hover:underline text-base'>
        How to install offline/Locally
      </h3>
      <h3 className='hover:underline text-base'>Updates</h3>
      <hr />
      <p className='hover:underline text-base text-center'>
        The site is in beta version, some functionalities maynot work as
        wexpected.
      </p>

      <p className='hover:underline text-xs'>Developed by: Reyna</p>
    </footer>
  );
}
