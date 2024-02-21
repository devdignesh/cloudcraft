"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ModeToggle } from "@/components/ui/ModeToggle";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { fetchWeather } from "@/app/api/fetchWeatherData";
import { setError, setWeather } from "@/redux/slice/weatherSlice";

const Navbar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const weatherData = await fetchWeather(query.toLowerCase());
      dispatch(
        setWeather({ data: weatherData, searchQuery: query.toLowerCase() })
      );
    } catch (error:any) {
      dispatch(setError(`Failed to fetch weather data: ${error.message}`));
    } finally {
      setQuery("");
    }
  };

  return (
    <div className="flex justify-end sm:justify-between">
      <span className="foreground text-xl font-bold hidden sm:block">
        CloudCraft
      </span>
      <div className="flex gap-2">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search city"
              className="max-w-60"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <Button variant="outline" size="icon" className="w-12 h-9">
              <IoSearch className="h-4 w-6" />
            </Button>
          </div>
        </form>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
