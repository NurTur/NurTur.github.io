export interface ExchangePoint {
  address?: string;
  phones: string[];
  courses: {
    [key: string]: [string, string] | undefined;
  };
  actualTime?: string;
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
