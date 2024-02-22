 'use client'
import "dotenv/config"; 
import React, { useEffect } from "react";
import Temprature from "@/components/features/Temprature";
import WeatherDetails from "@/components/features/WeatherDetails";
import Navbar from "@/components/features/Navbar";
import Mapview from "@/components/features/Mapview";


export default function Home() {
  
  // const { data, error, } = useSelector((state: RootState) => state.weather);
  
  return (
    <>
      <div className="h-full max-w-screen-xl m-auto sm:w-full background py-4 px-4 md:px-6 sm:px-8">
          <Navbar/>
        <div className="mt-10 pb-10 space-y-6">
          <div>
            <Temprature />
          </div>
          <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-4">
            <WeatherDetails />
          </div>
          <Mapview/>
        </div>
      </div>
    </>
  );
}
