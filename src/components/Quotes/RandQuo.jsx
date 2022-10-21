import React, { useEffect, useState } from 'react';
import Loader from '../Loader';

const urlrand = 'https://programming-quotes-api.herokuapp.com/Quotes/random';
export default function RandQuo() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(urlrand);
      const data = await response.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      setError(true);
      // alert(JSON.stringify(error));
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // if (loading) {
  //   return <Loader />;
  // }
  return show ? (
    <div className='py-5 text-xl text-center'>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      <div className='pointer-events-none'>
        <p className=' t'>{data?.en}</p>
        <span className='text-sm'>~{data?.author}</span>
      </div>
      <p
        onClick={() => {
          setShow((prev) => !prev);
        }}
        className=' text-center'
      >
        ^
      </p>
    </div>
  ) : (
    <p
      onClick={() => {
        setShow((prev) => !prev);
      }}
      className='p-1 m-2 max-w-fit mx-auto cursor-pointer text-center border rounded-md'
    >
      {'Show quotes'}
    </p>
  );
}

// <div className='flex flex-col justify-center items-center'>
//   <button
//     className='bg-gray-200 dark:bg-gray-800 rounded-full p-2'
//     onClick={fetchData}
//   >
//     🔄
//   </button>
//   {loading && <Loader />}
//   {error && <p>Something went wrong</p>}
//   {data && (
//     <div className='flex flex-col justify-center items-center'>
//       <p className='text-2xl font-bold text-red-600 dark:text-inherit'>
//         {data.en}
//       </p>
//       <p className='text-xl font-bold text-red-600 dark:text-inherit'>
//         {data.author}
//       </p>
//     </div>
//   )}
// </div>
