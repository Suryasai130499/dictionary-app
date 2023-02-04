import { FormEvent } from "react";
import styles from "./index.module.css";
import searchStore from "../../state/search";

const SearchField = () => {
  const text = searchStore((state) => state.text);
  const setText = searchStore((state) => state.setText);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  return (
    <input
      type="text"
      value={text}
      placeholder="Search for any word..."
      onInput={(e) => handleInput(e)}
      className={styles.searchField}
    />
  );
};

export default SearchField;
