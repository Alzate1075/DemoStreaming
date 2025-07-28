import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 text-center">
        <div className="flex flex-wrap justify-center md:justify-between items-center border-b border-gray-600 pb-4 gap-2">
          <div className="cursor-pointer flex gap-2 flex-wrap justify-center md:justify-start text-sm">
            <span>Home</span>
            <p>|</p>
            <span>Terms and Conditions</span>
            <p>|</p>
            <span>Privacy Policy</span>
            <p>|</p>
            <span>Collection Statement</span>
            <p>|</p>
            <span>Help</span>
            <p>|</p>
            <span>Manage Account</span>
          </div>
          <span className="mt-4 md:mt-0 text-xs">
            © 2016 DEMO Streaming. All Rights Reserved.
          </span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center mt-6 gap-4">
          <div className="flex gap-4">
            <img
              src="/assets/social/facebook-white.svg"
              alt="Facebook"
              className="h-6"
            />
            <img
              src="/assets/social/twitter-white.svg"
              alt="Twitter"
              className="h-6"
            />
            <img
              src="/assets/social/instagram-white.svg"
              alt="Instagram"
              className="h-6"
            />
          </div>
          <div className="flex gap-4">
            <img
              src="/assets/store/app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="/assets/store/play-store.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="/assets/store/windows-store.svg"
              alt="Windows Store"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
