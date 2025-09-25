export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('kk-KZ');
};

export const getCurrentTimeString = (): string => {
  return new Date().toLocaleTimeString('kk-KZ');
};

export const API_BASE_URL = 'http://localhost:5000'
//'https://exchangerback.onrender.com';
