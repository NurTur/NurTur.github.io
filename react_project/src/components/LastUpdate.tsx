import React from 'react';
import { getCurrentTimeString } from '../utils';

interface LastUpdateProps {
  lastUpdate: string;
}

export const LastUpdate: React.FC<LastUpdateProps> = ({ lastUpdate }) => {
  return (
    <div className="text-center mt-5 text-gray-500 text-sm">Последнее обновление: {lastUpdate}</div>
  );
};
