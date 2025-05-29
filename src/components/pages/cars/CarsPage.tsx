import React, { useEffect, useState } from "react";
import { CarType } from "../../../types/vehicle";
import { Link } from "../../common/Link";
import { ArrowRight, Star } from "lucide-react";
import "../../../styles/vehicles.css";

const CarCard: React.FC<{ car: CarType }> = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-image-container">
        <img src={car.image} alt={car.name} className="car-image" />
        <div className="car-price-tag">
          {car.price} {car.currency}/день
        </div>
      </div>

      <div className="car-content">
        <div className="car-header">
          <h3 className="car-title">{car.name}</h3>
          <div className="car-rating">
            <Star className="star-icon" size={16} />
            <span>{car.rating}</span>
            <span>({car.reviewCount} отзывов)</span>
          </div>
        </div>

        <div className="car-specs">
          <div className="spec-item">
            <span className="spec-label">Тип:</span>
            <span>{car.type}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Мест:</span>
            <span>{car.seats}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Трансмиссия:</span>
            <span>
              {car.transmission === "automatic" ? "Автомат" : "Механика"}
            </span>
          </div>
        </div>

        <div className="car-location">
          <span className="location-pin">📍</span>
          {car.location}
        </div>

        <Link href={`/cars/${car.id}`} className="view-details-button">
          Подробнее <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

const CarsPage: React.FC = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка загрузки машин");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка автомобилей...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="cars-page">
      <div className="page-header">
        <h1 className="page-title">Аренда автомобилей в Таиланде</h1>
        <p className="page-subtitle">
          Выберите из нашего широкого ассортимента автомобилей для вашего
          путешествия
        </p>
      </div>

      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="location">Местоположение:</label>
          <select id="location" className="filter-select">
            <option value="">Все</option>
            <option value="Пхукет">Пхукет</option>
            <option value="Остров Самуи">Остров Самуи</option>
            <option value="Бангкок">Бангкок</option>
            <option value="Chiang Mai">Чиангмай</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="type">Тип:</label>
          <select id="type" className="filter-select">
            <option value="">Все</option>
            <option value="Компакт">Компактные</option>
            <option value="Внедорожник">Внедорожники</option>
            <option value="Минивэн">Минивэны</option>
            <option value="Сэдан">Сэданы</option>
            <option value="Комфорта́бельный">Премиум</option>
          </select>
        </div>
      </div>

      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
