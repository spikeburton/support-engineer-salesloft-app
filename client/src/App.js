import React from 'react';

import './styles/app.css';

function App() {
  return (
    <main className="container">
      <header className="header">
        <h1>SalesLoft People</h1>
      </header>
      <section style={{ width: '650px' }}>
        <table className="people">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>
          </thead>
        </table>
      </section>
    </main>
  );
}

export default App;
