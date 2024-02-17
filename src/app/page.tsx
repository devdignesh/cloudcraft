import "dotenv/config"; 
import React from "react";

import Temprature from "@/components/features/Temprature";
import WeatherDetails from "@/components/features/WeatherDetails";
import Navbar from "@/components/features/Navbar";

export default function Home() {
  return (
    <>
      <div className="h-full max-w-screen-xl m-auto sm:w-full background py-4 px-6 md:px-8 sm:px-10">
          <Navbar/>
        <div className="mt-10 pb-10 space-y-6">
          <div>
            <Temprature />
          </div>
          <div className="grid grid-cols-0 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-4">
            <WeatherDetails />
          </div>
        </div>
      </div>
    </>
  );
}
