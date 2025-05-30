import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motorcycles } from "../../../data/vehicles";
import { Star, ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import "../../../styles/vehicles.css";

const MotorcycleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const motorcycle = motorcycles.find((m) => m.id === id);

  if (!motorcycle) {
    return <div>Мотоцикл не найден</div>;
  }

  return (
    <div className="motorcycle-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        <ArrowLeft size={20} /> Назад к списку
      </button>
      <div className="back-button-container"></div>

      <div className="motorcycle-gallery">
        <div className="main-image">
          <img src={motorcycle.image} alt={motorcycle.name} />
        </div>
        <div className="thumbnail-grid">
          {motorcycle.images.map((img, index) => (
            <div key={index} className="thumbnail">
              <img src={img} alt={`${motorcycle.name} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="motorcycle-info">
        <div className="motorcycle-header">
          <h1>{motorcycle.name}</h1>
          <div className="rating-location">
            <div className="rating">
              <Star size={18} className="star-icon" />
              <span>{motorcycle.rating}</span>
              <span>({motorcycle.reviewCount} отзывов)</span>
            </div>
            <div className="location">
              <MapPin size={18} />
              <span>{motorcycle.location}</span>
            </div>
          </div>
        </div>

        <div className="price-section">
          <div className="daily-price">
            {motorcycle.price} {motorcycle.currency}/день
          </div>
          <button
            className="rent-button"
            onClick={() => {
              navigate(
                `/pay?orderId=order-${
                  motorcycle.id
                }-${Date.now()}&userId=user-123&amount=${motorcycle.price}`
              );
            }}
          >
            Арендовать сейчас
          </button>
        </div>

        <div className="description-section">
          <h2>Описание</h2>
          <p>{motorcycle.description}</p>
        </div>

        <div className="specs-section">
          <h2>Характеристики</h2>
          <div className="specs-grid">
            <div className="spec-item">
              {/* <Gear size={20} /> */}
              <div>
                <div className="spec-name">Трансмиссия</div>
                <div className="spec-value">
                  {motorcycle.transmission === "automatic"
                    ? "Автоматическая"
                    : "Механическая"}
                </div>
              </div>
            </div>
            <div className="spec-item">
              <Users size={20} />
              <div>
                <div className="spec-name">Тип</div>
                <div className="spec-value">{motorcycle.type}</div>
              </div>
            </div>
            <div className="spec-item">
              <Calendar size={20} />
              <div>
                <div className="spec-name">Категория</div>
                <div className="spec-value">{motorcycle.category}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>Особенности</h2>
          <ul className="features-list">
            {motorcycle.features.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetailPage;
