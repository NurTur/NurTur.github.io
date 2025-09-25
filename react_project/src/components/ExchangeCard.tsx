import React from 'react';
import { ExchangePoint, CurrencyType } from '../types';

interface ExchangeCardProps {
  point: ExchangePoint;
  currency: CurrencyType;
  clickedPhones: Set<string>;
  onPhoneClick: (phone: string) => void;
}

export const ExchangeCard: React.FC<ExchangeCardProps> = ({
  point,
  currency,
  clickedPhones,
  onPhoneClick,
}) => {
  const rate = point.courses[currency.toUpperCase()];
  const buyRate = rate ? rate[0] : 'Н/Д';
  const sellRate = rate ? rate[1] : 'Н/Д';

  return (
    <div className="bg-white rounded-xl shadow-card p-5 transition-transform duration-300 hover:transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4 pb-3 border-b border-gray-200">
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-green-600">{buyRate}</span> /{' '}
          <span className="text-red-600">{sellRate}</span>
        </div>
        
        {/* Время на одном уровне с курсами */}
        <div className="text-xs text-gray-400 mt-1.5">
          {point.actualTime}
        </div>
      </div>
      
      <div className="font-medium mb-3 text-gray-700">{point.address || ''}</div>
      
      <div className="mb-4">
        {point.phones.map(phone => (
          <a
            key={phone}
            href={`tel:${phone}`}
            onClick={() => onPhoneClick(phone)}
            className={`inline-block bg-blue-50 px-3 py-1 rounded-full mr-2 mb-2 transition-colors ${
              clickedPhones.has(phone)
                ? 'text-green-600'
                : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            {phone}
          </a>
        ))}
      </div>
    </div>
  );
};