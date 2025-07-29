import Navbar from "../layoutGeneral/Navbar";
import CardsHome from "../cards/CardsHome";
import Footer from "../layoutGeneral/Footer";
import Layout from "../layoutGeneral/Layout";
import Cards from "../cards/Cards";
import React, { useEffect, useState } from "react";
import Loader from "../loading/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Layout>
      <div className="max-w-[100vw] overflow-x-hidden grid grid-cols-1 xs:w-full">
        <div className="flex items-center pt-18 pb-3 md:pb-4 bg-gray-700 sm:h-25 md:h-25 w-[100%]">
          <div className="px-4">
            <h2 className="text-md md:text-xl text-white font-semibold text-start md:text-left md:ml-15">
              Popular Titles
            </h2>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <Loader />
          </div>
        ) : (
          <CardsHome />
        )}
      </div>
    </Layout>
  );
}
