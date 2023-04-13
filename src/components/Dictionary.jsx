import React, { useState } from 'react';

export default function Dictionary() {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    handleFetchData(url);
  };

  return (
    <div className='flex flex-col w-full min-h-[50px]'>
      <h3 className='text-2xl p-2 font-semibold'>Dictionary</h3>
      <form className='p-2 flex w-full justify-around' onSubmit={handleSubmit}>
        <input
          className='p-1 m-2 w-full cursor-pointer border-blue-400 rounded-lg  border'
          type='text'
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder='Enter a word to search the meaning...'
          required
        />
        <button
          className='  font-bold  p-1 m-2 w-36 cursor-pointer bg-slate-400  border rounded-md
          py-1 px-4'
          type='submit'>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {data && (
        <div className='p-4 text-start dict'>
          {data.map(({ word, phonetic, phonetics, origin, meanings }) => (
            <div key={word}>
              <h2>Word: {word}</h2>
              <p>phonetic: {phonetic}</p>
              <p>origin: {origin}</p>
              {phonetics?.map(({ text, audio }) => (
                <div key={text}>
                  <p>Text: {text}</p>
                  <audio src={audio} controls />
                </div>
              ))}
              {meanings?.map(({ partOfSpeech, definitions }) => (
                <div className='border-t-2 my-2' key={partOfSpeech}>
                  <h3>{partOfSpeech}</h3>
                  {definitions?.map(
                    ({ definition, example, synonyms, antonyms }, index) => (
                      <div className='border-t-2 my-2' key={index}>
                        <p>definition: {definition}</p>
                        {example && <p>example: {example}</p>}
                        {synonyms && <p>synonyms:{JSON.stringify(synonyms)}</p>}
                        {antonyms && <p>antonyms:{JSON.stringify(antonyms)}</p>}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
