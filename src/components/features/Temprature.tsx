"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaLocationArrow } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TimeFormate from "./utils/TimeFormate";
import DateFormate from "./utils/DateFormate"; 

export default function Temprature() {
  const { data } = useSelector((state: RootState) => state.weather);
  
  const { temp_max, temp_min } = data.main;
  const maxTemperature = Math.round(temp_max);
  const minTemperature = Math.round(temp_min);
  
  return (
    <div>
      <Card>
        <CardHeader className="">
          <CardTitle className="flex gap-2">
            <FaTemperatureThreeQuarters className="h-4 w-4" />
            <span>Temprature</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="m-7">
          <p className="flex justify-center text-7xl font-bold sm:text-8xl">
            {Math.round(data.main.temp)}°C
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="flex justify-center mt-2 text-lg font-semibold">
              {data.name}, {data.sys.country}
            </p>
            <FaLocationArrow className="h-4 w-3" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-end">
          <div>
            <DateFormate />
            <TimeFormate />
          </div>
          <div className="flex flex-col items-end">
            <FaCloud className="w-8 h-8 " />
            <span className=" font-semibold">{data.weather[0].main}</span>

            <div className="hidden sm:block space-x-3 text-sm dark:text-neutral-500">
              <span>High: {maxTemperature}°C</span>
              <span>Low: {minTemperature}°C</span>
            </div>
            <div className="block sm:hidden text-sm dark:text-neutral-500">
              <span>H: {maxTemperature}</span>
              <span>L: {minTemperature}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
