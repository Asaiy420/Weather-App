import React from "react";
import {
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Gauge,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
} from "lucide-react";

const getWeatherIcon = (iconCode) => {
  const iconMap = {
    "01d": Sun,
    "01n": Sun,
    "02d": Cloud,
    "02n": Cloud,
    "03d": Cloud,
    "03n": Cloud,
    "04d": Cloud,
    "04n": Cloud,
    "09d": CloudRain,
    "09n": CloudRain,
    "10d": CloudRain,
    "10n": CloudRain,
    "13d": CloudSnow,
    "13n": CloudSnow,
  };

  return iconMap[iconCode] || Cloud;
};

const WeatherCard = ({ weather, loading }) => {
  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="h-8  rounded w-32 mb-2"></div>
            <div className="h-4 rounded w-24"></div>
          </div>
          <div className="h-16 w-16  rounded-full"></div>
        </div>
        <div className="h-12 rounded w-20 mb-4"></div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div>
        <div className="text-center">
          <Cloud className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No weather data available</p>
        </div>
      </div>
    );
  }

  const WeatherIcon = getWeatherIcon(weather.icon);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-white font-bold">{weather.country}</p>
        </div>
        <WeatherIcon className="h-16 w-16 opacity-80 text-white" />
      </div>

      <div className="mb-6">
        <div className="text-5xl font-bold mb-2 text-white">
          {weather.temperature}°C
        </div>
        <p className="text-xl text-white capitalize">{weather.description}</p>
        <p className="text-sm text-white font-semibold mt-3">
          Feels like {weather.feelsLike}°C
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Droplets className="h-4 w-4 text-white" />
          <span className="text-sm text-white">
            Humidity: {weather.humidity}%
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="h-4 w-4 text-white" />
          <span className="text-sm text-white">
            Wind: {weather.windSpeed} km/h
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Gauge className="size-4 text-white" />
          <span className="text-sm text-white">
            Pressure: {weather.pressure} hPa
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Eye className="size-4 text-white" />
          <span className="text-sm text-white">
            Visibility: {weather.visibility} km
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
