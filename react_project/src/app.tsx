import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { CurrencyTabs } from './components/CurrencyTabs';
import { ExchangeCard } from './components/ExchangeCard';
import { LastUpdate } from './components/LastUpdate';
import MapView from "./components/MapView";
import { useSSE } from './hooks/useSSE';
import { CurrencyType, CityType, PhoneClickState, MapViewState, ExchangePoint } from './types';
import { getCurrentTimeString } from './utils';

export const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityType>('almaty');
  const [activeCurrency, setActiveCurrency] = useState<CurrencyType>('cny');
  const [lastUpdate, setLastUpdate] = useState(getCurrentTimeString());
  const [clickedPhones, setClickedPhones] = useState<PhoneClickState>({});
  const [mapView, setMapView] = useState<MapViewState>({
    subsetIdx: [null],
    center: { lat: 0, lng: 0 },
    isOpen: false,
    points: [],
    city: 'almaty',
    currency: 'cny'
  });
  const [mapLoading, setMapLoading] = useState(false);

  const { data: points, error, isConnected } = useSSE(selectedCity, activeCurrency);

  const handlePhoneClick = useCallback((phone: string) => {
    const key = `${selectedCity}_${activeCurrency}`;
    setClickedPhones(prev => {
      const newSet = new Set(prev[key] || []);
      newSet.add(phone);
      return { ...prev, [key]: newSet };
    });
  }, [selectedCity, activeCurrency]);

  const handleShowMap = useCallback(async () => {
    setMapLoading(true); // start spinner

    try {
      const response = await fetch(
        `https://exchangerback.onrender.com/api/exchange/punkts/${selectedCity}?currency=${activeCurrency.toLocaleUpperCase()}`
      );
      const result = await response.json();

      const pointsResult = result.map((item: ExchangePoint) => ({ id: `${selectedCity}-${item.name}`, ...item }));
      const circleResponse = await fetch("https://exchangerback.onrender.com/api/circle/min-circle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ points: pointsResult }),
      });

      const circleData = await circleResponse.json();

      console.log("+++=====+", circleData)



      setMapView({
        subsetIdx: circleData.subsetIdx,
        center: circleData.center,
        isOpen: true,
        points: result,
        city: selectedCity,
        currency: activeCurrency
      });
    } catch (err) {
      console.error('Failed to fetch map points:', err);
    } finally {
      setMapLoading(false); // stop spinner
    }
  }, [selectedCity, activeCurrency]);

  const handleCloseMap = useCallback(() => {
    setMapView(prev => ({ ...prev, isOpen: false }));
  }, []);

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
      return (
        <div className="text-center py-5 font-bold text-red-600">
          Ошибка: {error}
        </div>
      );
    }

    if (!isConnected) {
      return (
        <div className="text-center py-5 font-bold text-blue-600">
          Загрузка данных...
        </div>
      );
    }

    if (points.length === 0) {
      return (
        <div className="text-center py-5 font-bold text-blue-600">
          Нет данных для отображения
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {points.map((point, index) => (
          <ExchangeCard
            key={`${point.address}-${index}`}
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
        <Header
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
          onShowMap={handleShowMap}
          mapLoading={mapLoading}
        />



        <CurrencyTabs
          activeCurrency={activeCurrency}
          onCurrencyChange={setActiveCurrency}
        />

        <div className="mb-8">
          {renderContent()}
        </div>

        <LastUpdate lastUpdate={lastUpdate} />

        <MapView
          isOpen={mapView.isOpen}
          onClose={handleCloseMap}
          points={mapView.points}
          city={mapView.city}
          currency={mapView.currency}
          center={mapView.center}
          subsetIdx={mapView.subsetIdx}
        />
      </div>
    </div>
  );
};