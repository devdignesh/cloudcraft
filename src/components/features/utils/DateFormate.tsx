import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DateFormate: React.FC = () => {
  const { dt, timezone } = useSelector((state: RootState) => state.weather.data);

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

    setDate(calculateLocalDate(dt, timezone));
  }, [dt, timezone]);

  return (
    <>
      <p className="text-sm sm:text-base font-semibold">{date}</p>
    </>
  );
};

export default DateFormate;
