import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 shadow-lg shadow-black/60 z-20 px-4 md:px-10 py-3">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-3xl text-white font-bold text-center md:text-left md:ml-10">
          DEMO Streaming
        </h1>

        <div className="flex justify-around items-center gap-4 md:mr-10">
          <h2 className="text-sm text-white font-semibold text-center md:text-right">
            Log in
          </h2>
          <div className="flex items-center justify-center mt-2 md:mt-0">
            <button className="bg-gray-800 text-white text-xs md:text-sm py-1 px-3 md:py-2 md:px-4 border border-gray-400 rounded-lg">
              Start your free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
