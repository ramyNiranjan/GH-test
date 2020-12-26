import React from "react";
import { usePaginatedQuery } from "react-query";
import axios from "axios";
import Planet from "./Planet";
import { useState } from "react";
import Button from "./Button";

const fetchPlanets = async (key, page) => {
  const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
  return res.data;
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", page],
    fetchPlanets
  );
  return (
    <div className="ml-8 text-gray-100">
      <h2 className="text-gray-100 mb-4 text-2xl">Planets</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <Button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </Button>
          <span className="m-4">{page}</span>
          <Button
            onClick={() =>
              setPage((prev) =>
                !latestData || !latestData.next ? prev : prev + 1
              )
            }
            disabled={!latestData || !latestData.next}
          >
            Next Page
          </Button>
          <div className="mt-4 ">
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
