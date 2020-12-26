import React from "react";

export default function Button({ onClick, children }) {
  return (
    <button
      className=" bg-transparent px-4 py-2 border-2 border-gray-600 rounded hover:border-gray-100 "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// button {
//   margin: 0 10px;
//   background: transparent;
//   border: 3px solid #ccc;
//   border-radius: 20px;
//   padding: 10px;
//   color: #ccc;
//   font-size: 1.2em;
//   cursor: pointer;
// }
// button:hover {
//   color: #fff;
//   border-color: #fff;
// }
