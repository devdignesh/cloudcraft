import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaLocationArrow, FaCloud } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TimeFormate from "./utils/TimeFormate";
import DateFormate from "./utils/DateFormate";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import classNames from "classnames";
import { cn } from "@/lib/utils";
import Image from "next/image"

const Temperature = () => {
  const { data } = useSelector((state: RootState) => state.weather);

  const { main, name, sys, weather } = data;
  const maxTemperature = Math.round(main.temp_max);
  const minTemperature = Math.round(main.temp_min);

  return (
    <div>
      <Card>
        <CardHeader className="">
          <CardTitle className="flex gap-2">
            <FaTemperatureThreeQuarters className="h-4 w-4" />
            <span>Temperature</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="m-7">
          <p className="flex justify-center text-7xl font-bold sm:text-8xl">
            {Math.round(main.temp)}°C
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="flex justify-center mt-2 text-lg font-semibold">
              {name}, {sys.country}
            </p>
            <FaLocationArrow className="h-4 w-3" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-end">
          <div>
            <DateFormate />
            <TimeFormate />
          </div>
          <div className="flex flex-col items-end space-y-1">
            <div>
              <div className="relative invert-0 dark:invert h-8 w-8 image-icon">
                <Image fill src={`/icons/${weather[0].icon}.svg`} alt={weather[0].icon} />
              </div>
              <span className=" font-semibold">{weather[0].main}</span>
            </div>
            <div className="hidden sm:block space-x-3 text-sm dark:text-neutral-500">
              <span>High: {maxTemperature}°C</span>
              <span>Low: {minTemperature}°C</span>
            </div>
            <div className="block sm:hidden space-x-1 text-sm dark:text-neutral-500">
              <span>H: {maxTemperature}</span>
              <span>L: {minTemperature}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default React.memo(Temperature);
