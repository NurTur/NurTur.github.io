import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { CurrencyTabs } from './components/CurrencyTabs';
import { ExchangeCard } from './components/ExchangeCard';
import { LastUpdate } from './components/LastUpdate';
import { useSSE } from './hooks/useSSE';
import { CurrencyType, CityType, PhoneClickState } from './types';
import { getCurrentTimeString } from './utils';

export const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityType>('almaty');
  const [activeCurrency, setActiveCurrency] = useState<CurrencyType>('cny');
  const [lastUpdate, setLastUpdate] = useState(getCurrentTimeString());
  const [clickedPhones, setClickedPhones] = useState<PhoneClickState>({});

  const { data: points, error, isConnected } = useSSE(selectedCity, activeCurrency);

  const handlePhoneClick = useCallback(
    (phone: string) => {
      const key = `${selectedCity}_${activeCurrency}`;
      setClickedPhones(prev => {
        const newSet = new Set(prev[key] || []);
        newSet.add(phone);
        return { ...prev, [key]: newSet };
      });
    },
    [selectedCity, activeCurrency]
  );

  const updateLastUpdateTime = useCallback(() => {
    setLastUpdate(getCurrentTimeString());
  }, []);

  React.useEffect(() => {
    if (isConnected && points.length > 0) {
      updateLastUpdateTime();
    }
  }, [isConnected, points, updateLastUpdateTime]);

  React.useEffect(() => {
    const interval = setInterval(updateLastUpdateTime, 60000);
    return () => clearInterval(interval);
  }, [updateLastUpdateTime]);

  const currentPhones = clickedPhones[`${selectedCity}_${activeCurrency}`] || new Set();

  const renderContent = () => {
    if (error) {
      return <div className="text-center py-5 font-bold text-danger">Ошибка: {error}</div>;
    }

    if (!isConnected) {
      return <div className="text-center py-5 font-bold text-blue-600">Загрузка данных...</div>;
    }

    if (points.length === 0) {
      return (
        <div className="text-center py-5 font-bold text-blue-600">Нет данных для отображения</div>
      );
    }

    console.log('------ ',points)

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {points.map((point, index) => (
          <ExchangeCard
            key={index}
            point={point}
            currency={activeCurrency}
            clickedPhones={currentPhones}
            onPhoneClick={handlePhoneClick}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-5">
      <div className="max-w-7xl mx-auto">
        <Header selectedCity={selectedCity} onCityChange={setSelectedCity} />

        <CurrencyTabs activeCurrency={activeCurrency} onCurrencyChange={setActiveCurrency} />

        <div className="mb-8">{renderContent()}</div>

        <LastUpdate lastUpdate={lastUpdate} />
      </div>
    </div>
  );
};
