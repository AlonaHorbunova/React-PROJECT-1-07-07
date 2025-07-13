import styles from "./styles.module.css";
import disneyIcon from "../../assets/icons/Disney.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import microsoftIcon from "../../assets/icons/Microsoft.svg";
import sonyIcon from "../../assets/icons/sony.svg";
import colaBlackIcon from "../../assets/icons/Cola-black.svg";

function Brends() {
  return (
    <section className={styles.jobSearch}>
      <div className={styles.conteinerLeft}>
        <p className={styles.title}>Помогаем найти работу:</p>
      </div>
      <div className={styles.conteinerRight}>
        <img className={styles.icon} src={disneyIcon} alt="disney" />
        <img className={styles.icon} src={facebookIcon} alt="facebook" />
        <img className={styles.icon} src={microsoftIcon} alt="microsoft" />
        <img className={styles.icon} src={sonyIcon} alt="sony" />
        <img className={styles.icon} src={colaBlackIcon} alt="Cola-black" />
      </div>
    </section>
  );
}

export default Brends;
