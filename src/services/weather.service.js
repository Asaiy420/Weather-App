const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_WEATHER_APP_API;

export const cities = [
  { id: 1, name: "Kathmandu", key: "1283240" },
  { id: 2, name: "New York", key: "5128581" },
  { id: 3, name: "London", key: "2643743" },
  { id: 4, name: "Tokyo", key: "1850147" },
  { id: 5, name: "Sydney", key: "2147714" },
  { id: 6, name: "Paris", key: "2988507" },
  { id: 7, name: "New Delhi", key: "1275339" },
];

export const getCurrentLocation = () => {
  return cities[0]; // Default to Kathmandu
};

export const getWeatherData = async (cityId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?id=${cityId}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Weather data fetch failed");
    }

    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name,
      country: data.sys.country,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
