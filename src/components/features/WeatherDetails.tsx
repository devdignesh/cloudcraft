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

import { GiSunset } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 
import { formatSunTime } from "./utils/SunTime";

export default function WeatherDetails() {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.weather
  );
 
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="">
            <GiSunset className="h-5 w-5 " />
            <span>Sunset</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="flex justify-center text-4xl font-bold"> {formatSunTime(data.sys.sunset,data.timezone)}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p>Sunrise</p>
          <span>{formatSunTime(data.sys.sunrise,data.timezone)}</span>
        </CardFooter>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>
            <WiHumidity className="h-5 w-5" />
            <span>Humidity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="flex justify-center text-4xl   font-bold">
            {data.main.humidity}%
          </p>
        </CardContent>
        <CardFooter className="mt-auto pt-0">
          <p>
            {data.main.humidity < 30
              ? "Low humidity. It might feel dry."
              : data.main.humidity < 70
              ? "Moderate humidity. Pleasant conditions."
              : "High humidity. It might feel humid."}
          </p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <MdVisibility className="h-4 w-4" />
            <span>Visibility</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="flex justify-center text-4xl font-bold">
            {data.visibility / 1000 ?? "N/A"} KM
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p>
            {data.visibility < 1000
              ? "Low visibility. Be cautious while driving."
              : data.visibility < 5000
              ? "Moderate visibility. Conditions are acceptable."
              : "High visibility. Clear weather"}
          </p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <IoSpeedometer className="h-4 w-4" />
            Pressure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="flex justify-center text-4xl font-bold">
            <span>{data.main.pressure} hPa</span>
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p>{data.main.pressure < 1000 ? "Low pressure. Weather might be stormy." : data.main.pressure ? "Normal pressure. Weather conditions are stable." : "High pressure. Weather might be clear and dry."}</p>
        </CardFooter>
      </Card>
    </>
  );
}
