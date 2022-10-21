import React, { useState } from 'react';
import { zendata } from '../../utils/zenquotes';
// https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value
// q = quote text
// a = author name
// i = author image (key required)
// c = character count
// h = pre-formatted HTML quote
const zenUrl = 'https://zenquotes.io/api/quotes';
export default function ZenCard() {
  const [quotePag, setQuotePag] = useState({ initial: 0, next: 3 });
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchQuotes = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(zenUrl);
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      setError(true);
      //   alert(JSON.stringify(error));
    }
    setLoading(false);
  };
  const nextquotes = () => {
    quotePag.initial > 50
      ? setQuotePag({
          initial: 0,
          next: 3,
        })
      : setQuotePag({ initial: quotePag.next, next: quotePag.next + 3 });
  };
  const prevquotes = () => {
    quotePag.initial < 3
      ? setQuotePag({
          initial: 0,
          next: 3,
        })
      : setQuotePag({ initial: quotePag.initial - 3, next: quotePag.next - 3 });
  };
  return (
    <div className='flex flex-col p-5'>
      <h2 className='text-4xl font-bold py-2'>Zen Quotes</h2>
      {/* <button onClick={fetchQuotes}>Get Quotes</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {quotes.map((quote, index) => (
        <div key={index} className='flex flex-col p-5'>
          <p>{quote.q}</p>
          <p>{quote.a}</p>
        </div>
      ))} */}
      {zendata.slice(quotePag.initial, quotePag.next).map((quote, index) => (
        <div
          key={index}
          className='flex flex-col p-2 pointer-events-none md:w-3/4 md:mx-auto'
        >
          <p className=' text-xl p-2  rounded-sm border-b shadow-sm'>
            {quote.q}
          </p>
          <p>~{quote.a}</p>
        </div>
      ))}
      <div className='my-5 mx-auto flex items-center justify-center'>
        {quotePag.initial > 2 && (
          <button
            className='inline-block py-2 px-6 border rounded-sm hover:text-blue-500 font-bold anim mx-5'
            onClick={prevquotes}
          >
            Prev
          </button>
        )}
        <p>
          {' '}
          {quotePag.initial}/{quotePag.next}/50
        </p>
        <button
          className='inline-block py-2 px-6 border rounded-sm hover:text-blue-500 font-bold anim mx-5'
          onClick={nextquotes}
        >
          Next
        </button>
      </div>
      {/* <span> {zendata.length}</span> */}
    </div>
  );
}
