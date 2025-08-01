import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cards({ mediaType }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/sample.json")
      .then((res) => {
        const filtered = res.data.entries.filter(
          (item) =>
            item.programType.toLowerCase() === mediaType.toLowerCase() &&
            parseInt(item.releaseYear) >= 2010
        );
        setMovies(filtered);
      })
      .catch((err) => console.error("Error al cargar el JSON:", err));
  }, [mediaType]);

  return (
    <div className="p-4">
      {movies.length === 0 ? (
        <p className="text-white text-center">
          No hay resultados para esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded shadow-xl p-2 h-full border border-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={movie.images?.["Poster Art"]?.url || "/Movies2.png"}
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/Movies2.png";
                }}
                className="w-full h-full object-cover rounded mb-2 border-2 border-gray-300"
              />
              <h2 className="text-center font-bold text-md line-clamp-2">
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
