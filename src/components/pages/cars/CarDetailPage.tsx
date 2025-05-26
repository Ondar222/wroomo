import React from "react";
import { useRouter } from "next/router";
import { cars } from "../../../data/vehicles";
import {
  Star,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  DoorOpen,
} from "lucide-react";
import Link from "next/link";
import "../../../styles/vehicles.css";

const CarDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return <div>Автомобиль не найден</div>;
  }

  return (
    <div className="car-detail-page">
      <div className="back-button-container">
        <Link href="/cars" className="back-button">
          <ArrowLeft size={20} /> Назад к списку
        </Link>
      </div>

      <div className="car-gallery">
        <div className="main-image">
          <img src={car.image} alt={car.name} />
        </div>
        <div className="thumbnail-grid">
          {car.images.map((img, index) => (
            <div key={index} className="thumbnail">
              <img src={img} alt={`${car.name} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="car-info">
        <div className="car-header">
          <h1>{car.name}</h1>
          <div className="rating-location">
            <div className="rating">
              <Star size={18} className="star-icon" />
              <span>{car.rating}</span>
              <span>({car.reviewCount} отзывов)</span>
            </div>
            <div className="location">
              <MapPin size={18} />
              <span>{car.location}</span>
            </div>
          </div>
        </div>

        <div className="price-section">
          <div className="daily-price">
            {car.price} {car.currency}/день
          </div>
          <button className="rent-button">Арендовать сейчас</button>
        </div>

        <div className="description-section">
          <h2>Описание</h2>
          <p>{car.description}</p>
        </div>

        <div className="specs-section">
          <h2>Характеристики</h2>
          <div className="specs-grid">
            <div className="spec-item">
              {/* <Gear size={20} /> */}
              <div>
                <div className="spec-name">Трансмиссия</div>
                <div className="spec-value">
                  {car.transmission === "automatic"
                    ? "Автоматическая"
                    : "Механическая"}
                </div>
              </div>
            </div>
            <div className="spec-item">
              <Users size={20} />
              <div>
                <div className="spec-name">Мест</div>
                <div className="spec-value">{car.seats}</div>
              </div>
            </div>
            <div className="spec-item">
              <DoorOpen size={20} />
              <div>
                <div className="spec-name">Дверей</div>
                <div className="spec-value">{car.doors}</div>
              </div>
            </div>
            <div className="spec-item">
              <Calendar size={20} />
              <div>
                <div className="spec-name">Год</div>
                <div className="spec-value">{car.year}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>Особенности</h2>
          <ul className="features-list">
            {car.features.map((feature, index) => (
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

export default CarDetailPage;
