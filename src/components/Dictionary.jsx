import React, { useState } from 'react';

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data)
      setData(data);
    } catch (error) {
      setError(true);
      setData('An error occured');
      // alert(JSON.stringify(error))
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <form className='p-2 flex w-' onSubmit={handleSubmit}>
        <input
          className='p-1 m-2 w-full cursor-pointer  border rounded-md'
          type='text'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          className=' bg-blue-400 font-bold text-white p-1 m-2 w-1/6 cursor-pointer  border rounded-md
        py-1 px-4
        '
          type='submit'
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {/* {data && <p>{JSON.stringify(data)}</p>} */}
      {data ? (
        <div className='p-4 text-start dict'>
          {data?.map(
            ({ word, phonetic, phonetics, origin, meanings }, index) => (
              <div key={index}>
                <h2>Word: {word}</h2>
                <p>phonetic: {phonetic}</p>
                <p>origin: {origin}</p>
                {phonetics?.map(({ text, audio }, index) => (
                  <div key={index}>
                    <p>Text: {text}</p>
                    <audio src={audio} controls />
                  </div>
                ))}
                {meanings?.map(({ partOfSpeech, definitions }, index) => (
                  <div className='border-t-2 my-2' key={index}>
                    <h3>{partOfSpeech}</h3>
                    {definitions?.map(
                      ({ definition, example, synonyms, antonyms }, index) => (
                        <div className='border-t-2 my-2' key={index}>
                          <p>definition: {definition}</p>
                          <p>example: {example}</p>
                          <p>synonyms:{JSON.stringify(synonyms)}</p>
                          <p>antonyms:{JSON.stringify(antonyms)}</p>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      ) : (
        <br />
      )}
    </div>
  );
}
