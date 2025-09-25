import { useState, useEffect, useRef } from 'react';
import { CurrencyType, CityType, ExchangePoint } from '../types';
import { API_BASE_URL } from '../utils';

export const useSSE = (city: CityType, currency: CurrencyType) => {
  const [data, setData] = useState<ExchangePoint[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    const url = `${API_BASE_URL}/api/exchange/sse/punkts/${city}/${currency}`;
    
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    setError(null);
    setIsConnected(false);
    setData([]); // Сбрасываем данные при переподключении

    eventSourceRef.current = new EventSource(url);

    eventSourceRef.current.onmessage = (event) => {
      try {
        const eventData = JSON.parse(event.data);
        
        // Проверяем, если пришла ошибка
        if (eventData && eventData.error) {
          setError(eventData.error);
          return;
        }

        // Сервер отправляет массив напрямую, а не объект с полем points
        if (Array.isArray(eventData)) {
          setData(eventData);
          setIsConnected(true);
        } else if (eventData && Array.isArray(eventData.points)) {
          // На случай, если формат изменится
          setData(eventData.points);
          setIsConnected(true);
        } else {
          setError('Неверный формат данных');
          console.error('Неверный формат данных:', eventData);
        }
      } catch (err) {
        setError('Ошибка обработки данных');
        console.error('Ошибка обработки данных:', err);
      }
    };

    eventSourceRef.current.onerror = (err) => {
      console.error('SSE ошибка:', err);
      setError('Ошибка соединения');
      setIsConnected(false);
      
      // Попытка переподключения через 5 секунд
      setTimeout(() => {
        if (eventSourceRef.current?.readyState === EventSource.CLOSED) {
          initSSEConnection();
        }
      }, 5000);
    };

    const initSSEConnection = () => {
      eventSourceRef.current = new EventSource(url);
    };

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [city, currency]);

  return { data, error, isConnected };
};