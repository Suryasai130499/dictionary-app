import { useBoolean } from 'usehooks-ts';
import themeStore from '../../state/theme';
import styles from './index.module.css';

const Dropdown = () => {
  const { value, toggle } = useBoolean(false);
  const font = themeStore((state) => state.font);
  const setFont = themeStore((state) => state.setFont);

  return (
    <div className={styles.dropdownWrapper}>
      <div
        onClick={() => toggle()}
        className={styles.name}
      >
        <p className={styles.fontName}>{font}</p>
        <span className={styles.arrow} />
      </div>
      <ul
        data-value={font}
        className={`${styles.fontList} ${value ? styles.show : ''}`}
      >
        <li
          onClick={() => setFont('Sans Serif')}
          className={`${styles.fontItem} ${
            font === 'Sans Serif' ? styles.active : ''
          }`}
        >
          Sans Serif
        </li>
        <li
          onClick={() => setFont('Serif')}
          className={`${styles.fontItem} ${
            font === 'Serif' ? styles.active : ''
          }`}
        >
          Serif
        </li>
        <li
          onClick={() => setFont('Mono')}
          className={`${styles.fontItem} ${
            font === 'Mono' ? styles.active : ''
          }`}
        >
          Mono
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
