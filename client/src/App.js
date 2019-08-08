import React, { useEffect, useState } from 'react';

import { FrequencyTable } from './components/FrequencyTable';
import { PeopleTable } from './components/PeopleTable';
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
      </header>
      <section style={{ margin: '0 auto' }}>
        <div
          id="count-button"
          onClick={() => toggleDisplayFreq(displayFreq ? false : true)}
        >
          {displayFreq ? 'Hide ' : 'Show '} Count
        </div>
        {displayFreq && <FrequencyTable people={people} />}
        <PeopleTable people={people} />
      </section>
    </main>
  );
};

export default App;
