import React, { useState, ReactNode, useContext, createContext } from 'react';

type ThemeContextType = {
  value?: string;
  setValue: (value: string) => void;
  errorMsg?: string;
  setError: (errorMsg: string) => void;
  reset: () => void;
};
type Props = { children: ReactNode };

const ShortenerContext = createContext<ThemeContextType | undefined>(undefined);

export const ShortenerProvider = ({ children }: Readonly<Props>) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [errorMsg, setError] = useState<string | undefined>(undefined);

  const reset = () => {
    setValue(undefined);
    setError(undefined);
  };

  return (
    <ShortenerContext.Provider value={{ value, setValue, errorMsg, setError, reset }}>
      {children}
    </ShortenerContext.Provider>
  );
};

export const useShortenerContext = () => {
  const context = useContext(ShortenerContext);
  if (!context) {
    throw new Error('useShortenerContext must be used within a ShortenerProvider');
  }
  return context;
};
