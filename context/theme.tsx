import storage from '@/utils/storage';
import { ThemeType, THEME_MODE } from '@/types/theme';
import { useState, ReactNode, useEffect, useContext, createContext } from 'react';

type ThemeContextType = { themeMode: ThemeType; changeThemeMode: () => void };
type Props = { children: ReactNode };

const initialTheme: ThemeType = THEME_MODE.light;

const ThemeContext = createContext<ThemeContextType>({
  themeMode: initialTheme,
  changeThemeMode: () => {},
});

export const ThemeProvider = ({ children }: Readonly<Props>) => {
  const [themeMode, setThemeMode] = useState<ThemeType>(initialTheme);
  const changeThemeMode = () => {
    const newMode = themeMode === THEME_MODE.dark ? THEME_MODE.light : THEME_MODE.dark;

    storage.set('themeMode', newMode);
    setThemeMode(newMode);
  };

  useEffect(() => {
    const savedMode = storage.get('themeMode');

    if (savedMode) {
      storage.set('themeMode', savedMode);
      setThemeMode(savedMode);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, changeThemeMode }}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
