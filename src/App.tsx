import { useEffect } from 'react';
import themeStore from './state/theme';
// import searchStore from './state/search';

import Header from './components/header';
import SearchField from './components/searchField';
import Meaning from './components/Meaning';

import styles from './App.module.css';

// const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2/words/en-gb';

function App() {
  const theme = themeStore((state) => state.theme);
  const font = themeStore((state) => state.font);
  // const text = searchStore((state) => state.text);

  // useEffect(() => {
  //   const getData = () => {
  //     fetch(`${baseUrl}?q=${text}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         app_id: 'bc24d434',
  //         app_key: '4be5b23fe1421644e6c582e944fdf435',
  //         'access-control-allow-origin': '*',
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   };

  //   getData();
  // }, [text]);

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
