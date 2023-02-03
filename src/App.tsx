import { createContext, useState } from 'react';
import './App.css';

interface ContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextType>({
  theme: 'light',
  setTheme
});

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App"></div>
    </ThemeContext.Provider>
  );
}

export default App;
