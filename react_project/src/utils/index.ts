export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('kk-KZ');
};

export const getCurrentTimeString = (): string => {
  return new Date().toLocaleTimeString('kk-KZ');
};

export const API_BASE_URL = 'https://exchangerback.onrender.com';
//'https://exchangerback.onrender.com';
