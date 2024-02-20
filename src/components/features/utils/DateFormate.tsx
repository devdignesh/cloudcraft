import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DateFormate: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.weather);

  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    function calculateLocalDate(
      utcTimestamp: number,
      timezoneOffsetSeconds: number
    ) {
      const localTime = new Date(
        utcTimestamp * 1000 + timezoneOffsetSeconds * 1000
      );

      return localTime.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }

    setDate(calculateLocalDate(data.dt, data.timezone));
  }, [data.dt, data.timezone]);

  return (
    <>
      <p className="text-sm sm:text-base font-semibold">{date}</p>
    </>
  );
};

export default DateFormate;
