import React from "react";
import NavBar from "./components/NavBar";
import Planets from "./components/Planets";
import Peoples from "./components/Peoples";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
      <div className="bg-gray-900 ">
        <h1 className="text-center text-5xl mb-4 px-4 text-yellow-300 pt-8">
          Star War Info
        </h1>
        <NavBar setPage={setPage} />
        <div className="pb-8  max-w-screen-lg mx-auto">
          {page === "planets" ? <Planets /> : <Peoples />}
        </div>
      </div>
    </>
  );
}

export default App;
