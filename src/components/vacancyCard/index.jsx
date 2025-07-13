import styles from "./styles.module.css";

function VacancyCard() {
  const vacancies = [
    {
      title: "Менеджер по управлению финансами в крупной компании",
      company: "Sony",
      location: "Осака, Япония",
      posted: "3 дня назад",
    },
    {
      title: "Специалист по продажам",
      company: "Facebook",
      location: "Коясан, Япония",
      posted: "7 дней назад",
    },
    {
      title: "Оператор колл центра",
      company: "CocaCola",
      location: "Томаму, Япония",
      posted: "1 день назад",
    },
    {
      title: "Системный администратор",
      company: "Sony",
      location: "Токио, Япония",
      posted: "3 дня назад",
    },
    {
      title: "Дизайнер интерьера в профессиональную студию в центре города",
      company: "Facebook",
      location: "Иокогама, Япония",
      posted: "2 дня назад",
    },
    {
      title: "Водитель на дальние дистанции",
      company: "CocaCola",
      location: "Кобе, Япония",
      posted: "1 день назад",
    },
  ];

  return (
    <section className={styles.vacancies}>
      <h2>Новые вакансии</h2>
      <p>Найди работу своей мечты прямо сейчас</p>
      <div className={styles.vacancyGrid}>
        {vacancies.map((vacancy, index) => (
          <div key={index} className={styles.vacancyCard}>
            <h3>{vacancy.title}</h3>
            <p>{vacancy.company}</p>
            <p>{vacancy.location}</p>
            <p>{vacancy.posted}</p>
          </div>
        ))}
      </div>
      <button className={styles.viewAll}>Все вакансии</button>
    </section>
  );
}

export default VacancyCard;
