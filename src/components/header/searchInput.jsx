import styles from "./SearchInput.module.css";
import Rectangle_12 from "../../assets/Rectangle_12.svg";
import searchIcon from "../../assets/icons/search.png";
import locationIcon from "../../assets/icons/location.png";
import InputWithIcon from "./InputWithIcon";

function SearchInput() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.titleInput}>
        <h1>
          Один клик <br /> и работа в кармане
        </h1>
        <div className={styles.searchBoxes}>
          <div className={styles.inputGroup}>
            <InputWithIcon
              icon={searchIcon}
              placeholder="Должность или компания"
            />
            <InputWithIcon icon={locationIcon} placeholder="Город, Страна" />
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
