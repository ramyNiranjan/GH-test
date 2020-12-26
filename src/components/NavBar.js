import React from "react";
import Button from "./Button";

const NavBar = ({ setPage }) => {
  return (
    <nav className="flex justify-evenly items-center  w-1/2 mx-auto text-gray-300">
      <Button onClick={() => setPage("planets")}>planets</Button>
      <Button onClick={() => setPage("people")}>peoples</Button>
    </nav>
  );
};

export default NavBar;
