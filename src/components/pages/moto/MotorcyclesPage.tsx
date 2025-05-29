import React, { useState } from "react";
import { MotorcycleType } from "../../../types/vehicle";
import { motorcycles } from "../../../data/vehicles";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import "../../../styles/vehicles.css";

const MotorcycleCard: React.FC<{ motorcycle: MotorcycleType }> = ({
  motorcycle,
}) => {
  return (
    <div className="motorcycle-card">
      <div className="motorcycle-image-container">
        <img
          src={motorcycle.image}
          alt={motorcycle.name}
          className="motorcycle-image"
        />
        <div className="motorcycle-price-tag">
          {motorcycle.price} {motorcycle.currency}/день
        </div>
      </div>

      <div className="motorcycle-content">
        <div className="motorcycle-header">
          <h3 className="motorcycle-title">{motorcycle.name}</h3>
          <div className="motorcycle-rating">
            <Star className="star-icon" size={16} />
            <span>{motorcycle.rating}</span>
            <span>({motorcycle.reviewCount} отзывов)</span>
          </div>
        </div>

        <div className="motorcycle-specs">
          <div className="spec-item">
            <span className="spec-label">Тип:</span>
            <span>{motorcycle.type}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Двигатель:</span>
            <span>{motorcycle.engineSize}cc</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Трансмиссия:</span>
            <span>
              {motorcycle.transmission === "automatic" ? "Автомат" : "Механика"}
            </span>
          </div>
        </div>

        <div className="motorcycle-location">
          <span className="location-pin">📍</span>
          {motorcycle.location}
        </div>

        <Link href={`/moto/${motorcycle.id}`} className="view-details-button">
          Подробнее <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

const MotorcyclesPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredMotorcycles = motorcycles.filter((motorcycle) => {
    const matchesLocation = selectedLocation
      ? motorcycle.location === selectedLocation
      : true;
    const matchesType = selectedType ? motorcycle.type === selectedType : true;
    return matchesLocation && matchesType;
  });

  return (
    <div className="motorcycles-page">
      <div className="page-header">
        <h1 className="page-title">Аренда мотоциклов в Таиланде</h1>
        <p className="page-subtitle">
          Выберите из нашего широкого ассортимента мотоциклов и скутеров для
          вашего путешествия
        </p>
      </div>

      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="location">Местоположение:</label>
          <select
            id="location"
            className="filter-select"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Все</option>
            <option value="Остров Самуи">Остров Самуи</option>
            <option value="Пхукет">Пхукет</option>
            <option value="Бангкок">Бангкок</option>
            <option value="Чиангмай">Чиангмай</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="type">Тип:</label>
          <select
            id="type"
            className="filter-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Все</option>
            <option value="Скутер">Скутеры</option>
            <option value="Спорт">Спортивные</option>
          </select>
        </div>
      </div>

      <div className="motorcycles-grid">
        {filteredMotorcycles.length > 0 ? (
          filteredMotorcycles.map((motorcycle) => (
            <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
          ))
        ) : (
          <p className="no-results">Нет мотоциклов по заданным фильтрам.</p>
        )}
      </div>
    </div>
  );
};

export default MotorcyclesPage;
