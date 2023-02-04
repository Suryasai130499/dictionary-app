import Book from '../../icons/book';
import Dropdown from '../dropdown';
import Toggle from '../toggle';

import styles from './index.module.css';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Book />
      <div className={styles.rightSection}>
        <Dropdown />
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
