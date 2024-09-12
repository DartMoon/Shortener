export enum THEME_MODE {
  dark = 'dark',
  light = 'light',
}

export type ThemeType = keyof typeof THEME_MODE;
