import React, { useEffect, useState } from 'react';

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
  return show ? (
    <div className='py-5 text-xl text-center'>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}

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
      className='hover:underline p-2 cursor-pointer text-center'
    >
      {'show'}
    </p>
  );
}
