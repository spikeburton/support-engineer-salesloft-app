import React, { useEffect, useState } from 'react';

import './styles/app.css';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('/api/people')
      .then(res => res.json())
      .then(setPeople);
  }, []);

  // console.log(people);

  return (
    <main className="container">
      <header className="header">
        <h1>SalesLoft People</h1>
      </header>
      <section style={{ margin: '0 auto' }}>
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
      </section>
    </main>
  );
};

export default App;
