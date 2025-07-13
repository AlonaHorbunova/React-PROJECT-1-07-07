import styles from "./styles.module.css";
import sectorIcon from "../../assets/icons/sector.png";
import autoIcon from "../../assets/icons/auto.png";
import designIcon from "../../assets/icons/design.png";
import restaurantIcon from "../../assets/icons/restaurant.png";
import medicineIcon from "../../assets/icons/medicine.png";
import multimeediaIcon from "../../assets/icons/multimedia.png";
import dialogIcon from "../../assets/icons/dialog.png";
import mailboxIcon from "../../assets/icons/mailbox.png";
import shopIcon from "../../assets/icons/shop.png";
import vectorIcon from "../../assets/icons/Vector.png";

function CategoryCard() {
  const categories = [
    { name: "Финансы", icon: sectorIcon },
    { name: "Грузоперевозки", icon: autoIcon },
    { name: "Дизайн", icon: designIcon },
    { name: "Ресторанный бизнес", icon: restaurantIcon },
    { name: "Медицина", icon: medicineIcon },
    { name: "Мультимедиа", icon: multimeediaIcon },
    { name: "Служба поддержки", icon: dialogIcon },
    { name: "Менеджмент", icon: mailboxIcon },
    { name: "Продажи", icon: shopIcon },
    { name: "Больше категорий", icon: vectorIcon },
  ];

  return (
    <section className={styles.categories}>
      <h2>
        Работа <br />
        по категориям
      </h2>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${styles.categoryCard} ${
              index === categories.length - 1 ? styles.lastCategoryCard : ""
            }`}
          >
            <div className={styles.categoryIcon}>
              <img src={category.icon} alt={category.name} />
            </div>
            <div className={styles.categoryName}>{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCard;
