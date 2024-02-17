import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TimeFormate: React.FC = () => {
  const initial = new Date();
  const { data } = useSelector((state: RootState) => state.weather);
  const [time, setTime] = useState(calculateLocalTime(initial, data.timezone));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateLocalTime(new Date(), data.timezone));
    }, 1000);

    return () => clearInterval(timer);
  }, [data.timezone]);

  function calculateLocalTime(initialTime: Date, offsetSeconds: number): Date {
    const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000);

    return localTime;
  }

  return (
    <p className="text-base font-semibold">
      {time && time.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      })}
    </p>
  );
};

export default TimeFormate;
