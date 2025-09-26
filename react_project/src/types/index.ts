export interface ExchangePoint {
  id?: string;
  address?: string;
  phones: string[];
  name: string;
  courses: {
    [key: string]: [string, string] | undefined;
  };
  actualTime?: string;
  date?: string;
  lat: number;
  lng: number;
}

export interface CurrencyData {
  points: ExchangePoint[];
  error?: string;
}

export type CurrencyType = 'cny' | 'try' | 'rub';
export type CityType = 'almaty' | 'astana' | 'shymkent' | 'pavlodar';

export interface PhoneClickState {
  [cityCurrency: string]: Set<string>;
}

export interface MapViewState {
  subsetIdx: [number | null];
  isOpen: boolean;
  points: ExchangePoint[];
  city: CityType;
  currency: CurrencyType;
  center: { lat: number; lng: number };
}
