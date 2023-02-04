import styles from './index.module.css';
import Moon from '../../icons/moon';
import themeStore from '../../state/theme';

const Toggle = () => {
  const theme = themeStore((state) => state.theme);
  const setTheme = themeStore((state) => state.setTheme);

  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <input
          onChange={handleChange}
          type="checkbox"
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <Moon />
    </div>
  );
};

export default Toggle;
