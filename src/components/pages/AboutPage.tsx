import React from "react";
import "../../styles/About.css";

const About: React.FC = () => {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1>О нас</h1>
        <p>
          RentBase — ваш надежный партнер по аренде транспорта в Таиланде и за
          его пределами!
        </p>
      </section>

      <section className="about-section">
        <h2>Наша миссия</h2>
        <p>
          Мы создаем прозрачную платформу, объединяющую водителей и владельцев
          транспорта. Наша цель — предоставить всем участникам комфорт и
          уверенность на каждом этапе аренды.
        </p>
      </section>

      <section className="about-section">
        <h2>Почему выбирают RentBase?</h2>
        <ul>
          <li>
            <strong>Реальные транспортные средства:</strong> Только настоящие
            фотографии и точные описания.
          </li>
          <li>
            <strong>Прозрачность и честность:</strong> Вы всегда получаете тот
            транспорт, который видите на платформе.
          </li>
          <li>
            <strong>Надежность и безопасность:</strong> Все владельцы проходят
            тщательную проверку.
          </li>
          <li>
            <strong>Широкий выбор транспорта:</strong> Автомобили, мотоциклы и
            скутеры для путешествий.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Система управления для владельцев</h2>
        <ul>
          <li>Полноценная система управления парком.</li>
          <li>Учет расходов и сервисного обслуживания.</li>
          <li>Бесплатное добавление внешних бронирований.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Наша гарантия качества и поддержка</h2>
        <p>
          Используя современные технологии, мы обеспечиваем безопасность
          информации наших пользователей. В случае проблем наша команда
          оперативно решит их.
        </p>
      </section>

      <section className="about-section">
        <h2>Готовы к партнерству?</h2>
        <p>
          Мы открыты для сотрудничества со всеми, кто видит потенциал в нашем
          деле и готов помочь нашему росту и развитию. Таиланд — это только
          начало нашего пути.
        </p>
      </section>
    </main>
  );
};

export default About;
