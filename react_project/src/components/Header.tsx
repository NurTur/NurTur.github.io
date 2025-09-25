import React from 'react';
import { CityType } from '../types';

interface HeaderProps {
  selectedCity: CityType;
  onCityChange: (city: CityType) => void;
}

const CITIES: { value: CityType; label: string }[] = [
  { value: 'almaty', label: 'Алматы' },
  { value: 'astana', label: 'Астана' },
  { value: 'shymkent', label: 'Шымкент' },
  { value: 'pavlodar', label: 'Павлодар' },
];

export const Header: React.FC<HeaderProps> = ({ selectedCity, onCityChange }) => {
  return (
    <header className="text-center mb-8 py-5 bg-gradient-to-r from-gray-800 to-blue-700 text-white rounded-lg shadow-card">
      <h1 className="text-4xl font-bold mb-2">Курсы обмена Нурболата</h1>
      <p className="text-lg opacity-90">Актуальные курсы обмена CNY, TRY и RUB в Казахстане</p>

      <div className="mt-4">
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
      </div>
    </header>
  );
};
