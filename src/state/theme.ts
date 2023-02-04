import { create } from 'zustand';

type Theme = {
  theme: string;
  setTheme: (theme: string) => void;
  font: string;
  setFont: (font: string) => void;
};

const themeStore = create<Theme>((set) => ({
  theme: 'light',
  font: 'Sans Serif',
  setTheme: (value: string) =>
    set(() => ({
      theme: value,
    })),
  setFont: (value: string) =>
    set({
      font: value,
    }),
}));

export type ThemeStore = typeof themeStore;

export default themeStore;
