import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/sample.json")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.entries);
      })
      .catch((err) => console.error("Error al cargar el JSON:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">
      {movies &&
        movies.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded shadow p-2 h-full"
          >
            <img
              src={movie.images?.["Poster Art"]?.url || "/Movies2.png"}
              alt={movie.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Movies2.png";
              }}
              className="w-full h-90 object-cover rounded mb-2 border-2 border-gray-300"
            />
            <h2 className="text-center text-sm font-semibold line-clamp-2">
              {movie.title}
            </h2>
          </div>
        ))}
    </div>
  );
}
