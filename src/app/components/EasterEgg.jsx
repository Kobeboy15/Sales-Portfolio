"use client"
import React, { useState, useEffect } from 'react';

export default function KeySequenceListener() {
  const targetSequence = ['K', 'O', 'B', 'E'];
  const [currentSequence, setCurrentSequence] = useState([]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const key = event.key.toUpperCase();

      setCurrentSequence((prevSequence) => {
        const newSequence = [...prevSequence, key];

        if (newSequence.join('').includes(targetSequence.join(''))) {
          onSequenceDetected();
          return [];
        }
        if (newSequence.length > targetSequence.length) {
          newSequence.shift();
        }

        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const onSequenceDetected = () => {
    window.open('https://www.kobemichael.works/', '_blank').focus()
  };

  return (
    <div className='hidden'>Hidden Easter Egg 😈</div>
  );
};
