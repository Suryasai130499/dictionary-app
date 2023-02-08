import { useEffect } from 'react';
import themeStore from './state/theme';
import searchStore from './state/search';
import meaningStore from './state/meaning';

import { useDebounce } from 'usehooks-ts';

import Header from './components/header';
import SearchField from './components/searchField';
import Meaning from './components/Meaning';

import styles from './App.module.css';

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function App() {
  const theme = themeStore((state) => state.theme);
  const font = themeStore((state) => state.font);
  const text = searchStore((state) => state.text);
  const setMeaning = meaningStore((state) => state.setMeaning);
  const setError = meaningStore((state) => state.setError);

  const debouncedValue = useDebounce(text, 250);

  useEffect(() => {
    const getData = () => {
      fetch(`${baseUrl}hello`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.title) {
            setError(data);
            setMeaning({});
          } else {
            setMeaning(data[0]);
            setError({});
          }
        });
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = () => {
      fetch(`${baseUrl}${text}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.title) {
            setError(data);
            setMeaning({});
          } else {
            setMeaning(data[0]);
            setError({});
          }
        });
    };

    getData();
  }, [debouncedValue]);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (font === 'Sans Serif') {
      document.body.classList.add('sans');
      document.body.classList.remove('serif');
      document.body.classList.remove('mono');
    } else if (font === 'Serif') {
      document.body.classList.remove('sans');
      document.body.classList.add('serif');
      document.body.classList.remove('mono');
    } else if (font === 'Mono') {
      document.body.classList.remove('sans');
      document.body.classList.remove('serif');
      document.body.classList.add('mono');
    } else {
      return;
    }
  }, [font]);

  return (
    <div className={styles.App}>
      <Header />
      <SearchField />
      <Meaning />
    </div>
  );
}

export default App;
