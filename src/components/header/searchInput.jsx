import styles from "./SearchInput.module.css";
import Rectangle_12 from "../../assets/Rectangle_12.svg";
import searchIcon from "../../assets/icons/search.png";
import locationIcon from "../../assets/icons/location.png";

function SearchInput() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.titleInput}>
        <h1>
          Один клик <br /> и работа в кармане
        </h1>
        <div className={styles.searchBoxes}>
          <div className={styles.inputGroup}>
            <div className={styles.inputWithIcon}>
              <img className={styles.icon} src={searchIcon} alt="logo" />
              <input type="text" placeholder="Должность или компания" />
            </div>
            <div className={styles.inputWithIcon}>
              <img className={styles.icon} src={locationIcon} alt="logo" />
              <input type="text" placeholder="Город, Страна" />
            </div>
          </div>
          <button>Поиск</button>
        </div>
      </div>
      <img
        className={styles.rectangle12}
        src={Rectangle_12}
        alt="blue_element"
      />
    </section>
  );
}

export default SearchInput;
