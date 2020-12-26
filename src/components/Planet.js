import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="flex flex-col bg-gray-800 justify-around mb-4 px-4 py-6 text-yellow-300">
      <h3 className="text-xl font-bold">{planet.name}</h3>
      <p>Population : {planet.population}</p>
      <p>Terrain : {planet.terrain}</p>
    </div>
  );
};

export default Planet;
