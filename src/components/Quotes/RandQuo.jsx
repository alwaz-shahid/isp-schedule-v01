import React, { useEffect, useState } from 'react';
import Loader from '../Loader';

const urlRand = 'https://api.quotable.io/random';

export default function RandQuo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(urlRand);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(true);
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleShow = () => {
    setShow((prev) => !prev);
    if (!show) {
      fetchData();
    }
  };

  return (
    <div className='text-center  py-7 px-2'>
      <button
        className='p-1 m-2 max-w-fit mx-auto cursor-pointer text-center border rounded-md animate-pulse'
        onClick={toggleShow}>
        {show ? 'Hide quote' : 'Show quote'}
      </button>
      {show && (
        <>
          {loading ? (
            <Loader />
          ) : error ? (
            <div>Something went wrong</div>
          ) : (
            data && (
              <>
                <p>{data.content}</p>
                <span className=''>- {data.author}</span>
              </>
            )
          )}
        </>
      )}
    </div>
  );
}
