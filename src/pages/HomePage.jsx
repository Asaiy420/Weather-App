import React, { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import CitySelector from "../components/CitySelector";
import {
  getWeatherData,
  cities,
  getCurrentLocation,
} from "../services/weather.service";
import {
  saveUserPreferences,
  getUserPreferences,
  getDefaultPreferences,
} from "../utils/localStorage";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user preferences on component mount
  useEffect(() => {
    const preferences = getUserPreferences() || getDefaultPreferences();
    const defaultCity =
      cities.find((city) => city.id === preferences.currentCityId) ||
      getCurrentLocation();
    setSelectedCity(defaultCity);
  }, []);

  // Fetch weather data when selected city changes
  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData(selectedCity);
    }
  }, [selectedCity]);

  const fetchWeatherData = async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const weatherData = await getWeatherData(city.key);
      setWeather(weatherData);

      // Save user preference
      const preferences = getUserPreferences() || getDefaultPreferences();
      const updatedPreferences = {
        ...preferences,
        currentCityId: city.id,
        lastUpdated: new Date().toISOString(),
      };
      saveUserPreferences(updatedPreferences);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error("Weather fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">
            Weather Forecast
          </h1>
          <p className="text-zinc-900 text-lg">
            Stay updated with real-time weather information
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 animate-slide-up">
            <p className="font-medium">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <WeatherCard weather={weather} loading={loading} />
          </div>

          <div className="space-y-6">
            <CitySelector
              cities={cities}
              selectedCity={selectedCity}
              onCityChange={handleCityChange}
              loading={loading}
            />

            <div className="rounded-xl p-6 shadow-lg backdrop-blur-xl ">
              <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                Quick Stats
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-950">Cities Available:</span>
                  <span className="font-medium text-black">
                    {cities.length}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-950">Last Updated:</span>
                  <span className="font-medium text-zinc-950">
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-950">Weather Source:</span>
                  <span className="font-medium text-zinc-950">
                    Open Weather API
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
