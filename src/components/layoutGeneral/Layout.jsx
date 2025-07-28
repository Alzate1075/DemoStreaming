import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title = "" }) {
  return (
    <div className="max-w-[100vw] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {title && (
        <div className="flex items-center pt-6 pb-3 bg-gray-700 w-full">
          <div className="px-4">
            <h2 className="text-md md:text-xl text-white font-semibold text-start md:text-left">
              {title}
            </h2>
          </div>
        </div>
      )}

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
