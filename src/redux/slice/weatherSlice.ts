import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultWeatherValues } from "./defaultWeatherValues";
import { WeatherItems } from "./types";

interface WeatherState {
  data: WeatherItems;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: defaultWeatherValues,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherItems>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setWeather, setLoading, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
