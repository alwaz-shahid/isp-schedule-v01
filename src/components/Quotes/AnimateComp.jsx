import React, { useEffect, useRef } from 'react';
export default function AnimateComp() {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (stack) {
      const letters = stack.textContent.split('');
      stack.innerHTML = '';
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('char' + (letters.indexOf(letter) + 1));
        stack.appendChild(span);
      });
    }
  }, []);

  return (
    <section>
      <div className='cover'>
        <p className='stack' ref={stackRef}>
          Computation
        </p>
      </div>
    </section>
  );
}
