import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed w-full bg-blue-600 shadow-lg shadow-black/60 z-20 py-2">
      <div className="flex items-center justify-between gap-4">
        <Link to="/">
          <h1 className="text-[15px] md:text-3xl text-white font-bold text-center md:text-left px-4 md:ml-15 cursor-pointer hover:scale-105 transition-transform duration-300">
            DEMO Streaming
          </h1>
        </Link>

        <div className="flex justify-around items-center gap-4 md:mr-10">
          <h2 className="text-sm text-white font-semibold text-center md:text-right">
            Log in
          </h2>
          <div className="flex items-center justify-center mt-2 md:mt-0 mr-4">
            <button className="bg-gray-800 text-white text-xs md:text-sm py-1 px-3 md:py-2 md:px-4 border border-gray-400 rounded-lg">
              Start your free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
