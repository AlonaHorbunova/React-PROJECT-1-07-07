import styles from "./SearchInput.module.css";
import Rectangle_12 from "../../assets/Rectangle_12.svg";

function SearchInput() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.titleInput}>
        <h1>
          Один клик <br /> и работа в кармане
        </h1>
        <div className={styles.searchBoxes}>
          <input type="text" placeholder="Должность или компания" />
          <input type="text" placeholder="Город, Страна" />
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
