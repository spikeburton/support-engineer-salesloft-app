import React from 'react';

import { countFrequencies } from '../services/countFrequencies';

export const FrequencyTable = ({ people }) => {
  return (
    <div>
      <table className="table-display">
        <thead>
          <tr>
            <th>Character</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {countFrequencies(people).map((char, i) => (
            <tr key={i}>
              <td>{char.char}</td>
              <td>{char.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
