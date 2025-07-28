import React from "react";
import { Link } from "react-router-dom";

const cardsData = [
  {
    title: "POPULAR SERIES",
    image: "/SeriesPopulares.jpeg",
    path: "/series",
  },
  {
    title: "POPULAR MOVIES",
    image: "/MoviesPopulares.jpg",
    path: "/movies",
  },
];

export default function CardsHome() {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 py-10 px-4">
      {cardsData.map((card, index) => (
        <Link to={card.path} key={index} className="text-center mb-8 lg:mb-0">
          <div className="w-[280px] sm:w-[300px] md:w-[400px] xl:w-[500px] bg-black text-white font-bold py-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <h1 className="text-2xl mt-2">
              {card.title.split(" ")[1].toUpperCase()}
            </h1>
          </div>
          <p className="text-2xl mt-2 font-bold">{card.title}</p>
        </Link>
      ))}
    </div>
  );
}
