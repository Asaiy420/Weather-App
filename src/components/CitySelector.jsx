import React from "react";
import { MapPin, ChevronDown } from "lucide-react";
const CitySelector = ({ cities, selectedCity, onCityChange, loading }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="size-6 text-white " />
        <h3 className="text-lg font-bold text-white">Select Location</h3>
      </div>

      <div className="relative ">
        <select
          value={selectedCity?.id || ""}
          onChange={(e) => {
            const cityId = parseInt(e.target.value);
            const city = cities.find((c) => c.id === cityId);
            onCityChange(city);
          }}
          disabled={loading}
          className="w-full appearance-none  rounded-lg px-4 py-3 pr-10 text-white focus:outline-none bg-zinc-900 focus:border-transparent disabled:opacity-50 cursor-pointer transition-all duration-200 "
        >
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}, {city.country}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
      </div>

      <p className="text-sm text-white text-center mt-2">
        Select a city to view its current weather conditions
      </p>
    </div>
  );
};

export default CitySelector;
