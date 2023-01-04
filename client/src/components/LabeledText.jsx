/**
 * ************************************
 *
 * @module  LabeledText
 * @author
 * @date
 * @description Simple presentation component that shows a bold label next to plain text
 *
 * ************************************
 */

import React from 'react';
import { useState } from 'react';

const LabeledText = ({ label, text }) => {
  const [a, setA] = useState('a');

  return (
    <p>
      <strong>{`${label}: `}</strong>
      {text}
    </p>
  );
};

export default LabeledText;
