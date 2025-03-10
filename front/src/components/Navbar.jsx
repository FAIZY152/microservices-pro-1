import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16  text-white">
      <div className="flex pt-2 px-4 justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Code Snippet</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
