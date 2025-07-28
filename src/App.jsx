import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PopularMovies from "./components/pages/PopularMovies";
import PopularSeries from "./components/pages/PopularSeries";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<PopularMovies />} />
        <Route path="/Series" element={<PopularSeries />} />
      </Routes>
    </div>
  );
}
