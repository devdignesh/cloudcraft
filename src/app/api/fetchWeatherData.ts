import 'dotenv/config'
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { WeatherItems } from '@/redux/slice/types'; 
 
export const fetchWeather = async (query: string): Promise<WeatherItems> => {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query || 'delhi'}&units=metric&appid=${apiKey}`;

  try {
    const response: AxiosResponse<WeatherItems> = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
       
      throw new Error(`Failed to fetch weather data: ${error.response.status}`);
    } else {
      
      throw new Error('Failed to fetch weather data');
    }
  }
};