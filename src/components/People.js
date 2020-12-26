import React from "react";

const People = ({ person }) => {
  return (
    <div className="flex flex-col bg-gray-800 justify-around mb-4 px-4 py-6 text-yellow-300">
      <h3 className="text-xl font-bold">{person.name}</h3>
      <p>Gender : {person.gender}</p>
      <p>Birth Year : {person.birth_year}</p>
    </div>
  );
};

export default People;
