import React from 'react';
import { CityType } from '../types';

interface HeaderProps {
  selectedCity: CityType;
  onCityChange: (city: CityType) => void;
  onShowMap: () => void,
  mapLoading: boolean
}

const CITIES: { value: CityType; label: string }[] = [
  { value: 'almaty', label: 'Алматы' },
  { value: 'astana', label: 'Астана' },
  { value: 'shymkent', label: 'Шымкент' },
  { value: 'pavlodar', label: 'Павлодар' },
];

export const Header: React.FC<HeaderProps> = ({ selectedCity, onCityChange, onShowMap, mapLoading }) => {
  return (
    <header className="text-center mb-8 py-5 bg-gradient-to-r from-gray-800 to-blue-700 text-white rounded-lg shadow-card">
      <h1 className="text-4xl font-bold mb-2">Курсы обмена Нурболата</h1>
      <p className="text-lg opacity-90">Актуальные курсы обмена CNY, TRY и RUB в Казахстане</p>

      <div className="mt-6 flex justify-center items-center space-x-12">
        <select
          value={selectedCity}
          onChange={e => onCityChange(e.target.value as CityType)}
          className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-button border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {CITIES.map(city => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        <button
          onClick={onShowMap}
          className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
          disabled={mapLoading} // optional: disable while loading
        >
          {mapLoading ? (
            <svg
              className="w-5 h-5 animate-spin text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          )}
          <span>{mapLoading ? "Загрузка..." : "Карта"}</span>
        </button>
      </div>
    </header>
  );
};
