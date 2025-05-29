import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CarType } from "../../../types/vehicle";
import {
  Star,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  DoorOpen,
} from "lucide-react";
import { Link } from "../../common/Link";
import { useTranslation } from "react-i18next";
import "../../../styles/vehicles.css";

const CarDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [car, setCar] = useState<CarType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (!car) return <div>{t("car.not_found", "Автомобиль не найден")}</div>;

  return (
    <div className="car-detail-page">
      <Link href="/cars" className="back-button">
        <ArrowLeft size={20} /> {t("car.back_to_list", "Назад к списку")}
      </Link>

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
              <span>
                ({car.reviewCount} {t("car.reviews", "отзывов")})
              </span>
            </div>
            <div className="location">
              <MapPin size={18} />
              <span>{car.location}</span>
            </div>
          </div>
        </div>

        <div className="price-section">
          <div className="daily-price">
            {car.price} {car.currency}/{t("car.per_day", "день")}
          </div>
          <button
            className="rent-button"
            onClick={() => {
              navigate(
                `/pay?orderId=order-${
                  car.id
                }-${Date.now()}&userId=user-123&amount=${car.price}`
              );
            }}
          >
            {t("car.rent_now", "Арендовать сейчас")}
          </button>
        </div>

        <div className="description-section">
          <h2>{t("car.description", "Описание")}</h2>
          <p>{car.description}</p>
        </div>

        <div className="specs-section">
          <h2>{t("car.specs", "Характеристики")}</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <div>
                <div className="spec-name">
                  {t("car.transmission", "Трансмиссия")}
                </div>
                <div className="spec-value">
                  {car.transmission === "automatic"
                    ? t("car.transmission_auto", "Автоматическая")
                    : t("car.transmission_manual", "Механическая")}
                </div>
              </div>
            </div>
            <div className="spec-item">
              <Users size={20} />
              <div>
                <div className="spec-name">{t("car.seats", "Мест")}</div>
                <div className="spec-value">{car.seats}</div>
              </div>
            </div>
            <div className="spec-item">
              <DoorOpen size={20} />
              <div>
                <div className="spec-name">{t("car.doors", "Дверей")}</div>
                <div className="spec-value">{car.doors}</div>
              </div>
            </div>
            <div className="spec-item">
              <Calendar size={20} />
              <div>
                <div className="spec-name">{t("car.year", "Год")}</div>
                <div className="spec-value">{car.year}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>{t("car.features", "Особенности")}</h2>
          <ul className="features-list">
            {car.features.map((feature, index) => (
              <li key={index} className="feature-item">
                {t(`car.features.${feature}`, feature)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
