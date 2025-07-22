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
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 p-4">
      {movies &&
        movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <img
              src={movie.images?.["Poster Art"]?.url || "/Movies2.png"}
              alt={movie.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Movies2.png";
              }}
              className="border-2 border-gray-300"
            />
          </div>
        ))}
    </div>
  );
}
