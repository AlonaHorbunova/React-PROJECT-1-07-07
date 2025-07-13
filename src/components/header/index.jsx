import styles from "./styles.module.css";
import cooljobIcon from "../../assets/icons/Cooljob.png";
import SearchInput from "./searchInput";

function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <img className={styles.logo} src={cooljobIcon} alt="logo" />
        <ul className={styles.menu}>
          <li>
            <a className={styles.link} href="/jobs">
              Поиск работы
            </a>
          </li>
          <li>
            <a className={styles.link} href="/start">
              Поиск стартапов
            </a>
          </li>
        </ul>
        <div className={styles.auth}>
          <a className={styles.link} href="/login">
            Регистрация
          </a>
          <button
            className={`${styles.link} ${styles.button}`}
            href="/register"
          >
            Вход
          </button>
        </div>
      </nav>
      <SearchInput />
    </header>
  );
}

export default Header;
