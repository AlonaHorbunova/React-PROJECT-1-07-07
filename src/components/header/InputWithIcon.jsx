import styles from "./InputWithIcon.module.css";

function InputWithIcon({ icon, placeholder }) {
  return (
    <div className={styles.inputWithIcon}>
      <img className={styles.icon} src={icon} alt="icon" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default InputWithIcon;
