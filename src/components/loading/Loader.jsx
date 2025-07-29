import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="loader text-black"></div>
    </div>
  );
}
