import React from "react";
import Layout from "../layoutGeneral/Layout";
import Cards from "../cards/Cards";

const PopularMovies = () => {
  return (
    <Layout>
      <div className="max-w-[100vw] overflow-x-hidden grid grid-cols-1 xs:w-full">
        <div className="flex items-center pt-18 pb-3 md:pb-4 bg-gray-700 sm:h-25 md:h-25 w-[100%]">
          <div className="px-4">
            <h2 className="text-md md:text-xl text-white font-semibold text-start md:text-left md:ml-15">
              Popular Movies
            </h2>
          </div>
        </div>

        <Cards mediaType="movie" />
      </div>
    </Layout>
  );
};

export default PopularMovies;
