import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultWeatherValues } from "./defaultWeatherValues";
import { WeatherItems } from "./types";

interface WeatherState {
  data: WeatherItems;
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

interface SetWeatherPayload {
  data: WeatherItems;
  searchQuery: string;
}

const initialState: WeatherState = {
  data: defaultWeatherValues,
  loading: false,
  error: null,
  searchQuery: "delhi",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<SetWeatherPayload>) => {
      state.data = { ...state.data, ...action.payload.data };
      state.error = null;
      state.searchQuery = action.payload.searchQuery || "delhi";
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setWeather, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
