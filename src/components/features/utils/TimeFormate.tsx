import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const TimeFormat: React.FC = () => {
  const { timezone } = useSelector((state: RootState) => state.weather.data);
  const [formattedTime, setFormattedTime] = useState<string | null>(null);

  useEffect(() => {
    const calculateLocalTime = (offsetSeconds: number): string => {
      const utcTime = new Date();
      const localTime = new Date(utcTime.getTime() + offsetSeconds * 1000);

      return localTime.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
    };

    const timer = setInterval(() => {
      setFormattedTime(calculateLocalTime(timezone));
    }, 1000);

    return () => clearInterval(timer);
  }, [timezone]);

  return <p className="font-semibold">{formattedTime}</p>;
};

export default TimeFormat;
