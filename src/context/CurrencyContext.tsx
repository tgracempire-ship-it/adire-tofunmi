import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountNGN: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Exchange rates relative to NGN
const RATES: Record<Currency, number> = {
  NGN: 1,
  USD: 1 / 1550,
  GBP: 1 / 1980,
};

const SYMBOLS: Record<Currency, string> = {
  NGN: '₦',
  USD: '$',
  GBP: '£',
};

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('NGN');

  const formatPrice = (amountNGN: number): string => {
    const rate = RATES[currency];
    const converted = amountNGN * rate;

    if (currency === 'NGN') {
      return `${SYMBOLS.NGN}${amountNGN.toLocaleString('en-NG')}`;
    }

    return `${SYMBOLS[currency]}${Math.round(converted).toLocaleString('en-US')}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
