import React from 'react';
import { CurrencyType } from '../types';

interface CurrencyTabsProps {
  activeCurrency: CurrencyType;
  onCurrencyChange: (currency: CurrencyType) => void;
}

const CURRENCIES: { value: CurrencyType; label: string }[] = [
  { value: 'cny', label: 'Китайский юань (CNY)' },
  { value: 'try', label: 'Турецкая лира (TRY)' },
  { value: 'rub', label: 'Российский рубль (RUB)' },
];

export const CurrencyTabs: React.FC<CurrencyTabsProps> = ({ activeCurrency, onCurrencyChange }) => {
  return (
    <div className="flex justify-center mb-5 flex-wrap">
      {CURRENCIES.map(currency => (
        <button
          key={currency.value}
          onClick={() => onCurrencyChange(currency.value)}
          className={`px-6 py-3 mx-1 mb-2 cursor-pointer font-bold transition-all duration-300 rounded-t-lg ${
            activeCurrency === currency.value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
        >
          {currency.label}
        </button>
      ))}
    </div>
  );
};
