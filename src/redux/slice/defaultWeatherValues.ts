import { WeatherItems } from "./types";

export const defaultWeatherValues: WeatherItems = {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: "N/A",
        description: "N/A",
        icon: "",
      },
    ],
    base: "N/A",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: "N/A",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "N/A",
    cod: 0,
  };
  