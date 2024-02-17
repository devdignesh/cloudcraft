import 'dotenv/config'
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { WeatherItems } from '@/redux/slice/types';


const handleApiError = (error: AxiosError): void => {
  if (error.response) {
    console.error('API Error Response:', error.response.data);
  } else if (error.request) {
    console.error('API Error Request:', error.request);
  } else {
    console.error('API Error:', error.message);
  }
};
 
export const fetchWeather = async (query: string): Promise<WeatherItems> => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

  try {
    const response: AxiosResponse<WeatherItems> = await axios.get(apiUrl);
    return response.data;
  } catch (error:any) {
    handleApiError(error);
    throw new Error('Failed to fetch weather data'); 
   
  }
};
