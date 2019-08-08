import React from 'react';

export const PeopleTable = ({ people }) => {
  return (
    <div>
      <table className="table-display">
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
  );
};
