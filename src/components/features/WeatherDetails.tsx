// WeatherDetails.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { formatSunTime } from "./utils/SunTime";
 

import { GiSunset } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import WeatherCard from "./utils/WeatherCard";

export default function WeatherDetails() {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <>
      {data && (
        <>
          <WeatherCard
            icon={<GiSunset className="h-5 w-5" />}
            title="Sunset"
            value={formatSunTime(data.sys.sunset, data.timezone)}
            description="Sunrise"
            subDescription={formatSunTime(data.sys.sunrise, data.timezone)}
          />
          <WeatherCard
            icon={<WiHumidity className="h-5 w-5" />}
            title="Humidity"
            value={`${data.main.humidity}%`}
            description={getDescription("humidity",data.main.humidity)}
          />
          <WeatherCard
            icon={<MdVisibility className="h-5 w-5" />}
            title="Visibility"
            value={`${data.visibility / 1000 ?? "N/A"} KM`}
            description={getDescription("humidity",data.visibility)}
          />
          <WeatherCard
            icon={<IoSpeedometer className="h-5 w-5" />}
            title="Pressure"
            value={`${data.main.pressure} hPa`}
            description={getDescription("humidity",data.main.pressure)}
          />
        </>
      )}
    </>
  );
}

const getDescription = (type: string, value: number): string => {
  switch (type) {
    case "humidity":
      return value < 30
        ? "Low humidity. It might feel dry."
        : value < 70
        ? "Moderate humidity. Pleasant conditions."
        : "High humidity. It might feel humid.";

    case "visibility":
      return value < 1000
        ? "Low visibility. Be cautious while driving."
        : value < 5000
        ? "Moderate visibility. Conditions are acceptable."
        : "High visibility. Clear weather";

    case "pressure":
      return value < 1000
        ? "Low pressure. Weather might be stormy."
        : value
        ? "Normal pressure. Weather conditions are stable."
        : "High pressure. Weather might be clear and dry.";

    default:
      return "";
  }
};

