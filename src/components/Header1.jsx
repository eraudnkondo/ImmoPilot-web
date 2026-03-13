import React from "react";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <header className="flex justify-between items-center px-6 py-5 bg-gray-100 border-b border-gray-200 sticky top-0 z-50">

      <Link
        to="/"
        className="text-4xl tracking-widest text-amber-600 uppercase no-underline ml-10 font-bold"
      >
        IMMOPILOT
      </Link>

      <Link
        to="/"
        className="flex items-center gap-3 text-gray-800 px-6 py-3 rounded-lg hover:bg-[#6F8BFF] hover:text-white transition shadow-md text-lg font-semibold"
      >
        ACCEUIL
      </Link>

    </header>
  );
};

export default Header1;