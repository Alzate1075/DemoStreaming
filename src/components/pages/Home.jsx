import React from "react";
import Navbar from "../layout/Navbar";
import CardsHome from "../cards/CardsHome";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-1 min-h-screen w-full">
      <Navbar />

      <div className="pt-20 bg-gray-700 h-30 w-full">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl text-white font-semibold text-start md:text-left mb-4 md:ml-15">
            Popular Titles
          </h2>
        </div>
      </div>

      <CardsHome />
      <Footer />
    </div>
  );
}
