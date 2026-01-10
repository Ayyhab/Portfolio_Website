'use client';

import { ReactNode } from 'react';

/**
 * Splits text into individual letter spans for animation
 */
export function splitTextIntoLetters(text: string): ReactNode[] {
  return text.split('').map((char, index) => {
    // Preserve spaces as non-breaking spaces
    if (char === ' ') {
      return <span key={index} className="inline-block">&nbsp;</span>;
    }
    return (
      <span key={index} className="inline-block overflow-hidden">
        <span className="inline-block will-change-transform">{char}</span>
      </span>
    );
  });
}

/**
 * Splits text into words, then letters for more complex animations
 */
export function splitTextIntoWordsAndLetters(text: string): ReactNode[] {
  return text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block mr-2">
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className="inline-block overflow-hidden">
          <span className="inline-block will-change-transform">{char}</span>
        </span>
      ))}
    </span>
  ));
}
