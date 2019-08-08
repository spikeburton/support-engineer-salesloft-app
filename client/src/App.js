import React, { useEffect, useState } from 'react';

import { countFrequencies } from './services/countFrequencies';
import './styles/app.css';

const App = () => {
  const [people, setPeople] = useState([]);
  const [displayFreq, toggleDisplayFreq] = useState(false);

  useEffect(() => {
    fetch('/api/people')
      .then(res => res.json())
      .then(setPeople);
  }, []);

  return (
    <main className="container">
      <header className="header">
        <h1>SalesLoft People</h1>
        <h2>TESTING</h2>
      </header>
      <section style={{ margin: '0 auto' }}>
        <div
          id="count-button"
          onClick={() => toggleDisplayFreq(displayFreq ? false : true)}
        >
          {displayFreq ? 'Hide ' : 'Show '} Count
        </div>
        {displayFreq && (
          <div>
            <table className="people">
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
        )}
        <div>
          <table className="people">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, i) => (
                <tr key={i}>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default App;
