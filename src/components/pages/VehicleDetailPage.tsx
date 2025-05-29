import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motorcycles, cars } from "../../data/vehicles";

import "../../styles/VehicleDetails.css";

const VehicleDetailPage = () => {
  const [vehicleId] = useState(window.location.pathname.split("/").pop());
  const allVehicles = [...motorcycles, ...cars];
  const vehicle = allVehicles.find((v) => v.id === vehicleId);
  const navigate = useNavigate(); // Для навигации вместо router.push

  if (!vehicle) {
    return (
      <div className="vehicle-not-found">
        <h1 className="not-found-title">Транспортное средство не найдено</h1>
      </div>
    );
  }

  const renderSpecificationIcon = (icon: string) => {
    switch (icon) {
      case "users":
        return (
          <svg className="spec-icon" width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
          </svg>
        );
      case "engine":
        return (
          <svg className="spec-icon" width="16" height="16" viewBox="0 0 24 24">
            <path d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4H7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vehicle-detail-container">
      <div className="vehicle-detail-wrapper">
        <div className="vehicle-header">
          <h1 className="vehicle-title">{vehicle.name}</h1>
          <div className="vehicle-subtitle">
            <span className="vehicle-model">
              {vehicle.brand} {vehicle.model}
            </span>
            <span className="separator">•</span>
            <span className="vehicle-year">{vehicle.year}</span>
          </div>
        </div>

        <div className="vehicle-content-grid">
          {/* Image gallery */}
          <div className="vehicle-gallery">
            <div className="main-image-container">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="main-image"
              />
            </div>
            <div className="thumbnail-grid">
              {vehicle.images.slice(0, 3).map((img, index) => (
                <div key={index} className="thumbnail-container">
                  <img
                    src={img}
                    alt={`${vehicle.name} ${index + 1}`}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle information */}
          <div className="vehicle-info">
            <div className="vehicle-type-rating">
              <div className="vehicle-type-tag">
                {vehicle.vehicleType === "motorcycle" ? (
                  <svg
                    className="vehicle-type-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.5 10.5h2v1h-2v-1zm-13 0h2v3h-2v-3zm15 3h1.5v-3H22v3h-2.5zM18 10c-.8 0-1.4.4-1.8 1H12l-1.9-3.3c-.3-.5-1-.7-1.5-.4-.5.3-.7 1-.4 1.5L10 11H5.8c-.5-1.2-1.6-2-2.8-2-1.7 0-3 1.3-3 3s1.3 3 3 3c1.2 0 2.3-.8 2.8-2h8.4c.5 1.2 1.6 2 2.8 2 1.7 0 3-1.3 3-3s-1.3-3-3-3zM5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm13 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                  </svg>
                ) : (
                  <svg
                    className="vehicle-type-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.9 6c-.4-1.2-1.5-2-2.8-2H7.9c-1.3 0-2.4.8-2.8 2H3v3h1.1c-.1.5-.1 1 0 1.5H3v3h1.1c.4 1.2 1.5 2 2.8 2h8.2c1.3 0 2.4-.8 2.8-2H21v-3h-1.1c.1-.5.1-1 0-1.5H21V6h-2.1zM7.9 14c-.8 0-1.5-.7-1.5-1.5S7.1 11 7.9 11s1.5.7 1.5 1.5S8.7 14 7.9 14zm8.2 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                  </svg>
                )}
                <span className="type-badge">{vehicle.type}</span>
              </div>
              <div className="rating-container">
                <svg
                  className="star-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="rating-value">{vehicle.rating}</span>
                <span className="review-count">({vehicle.reviewCount})</span>
              </div>
            </div>

            <div className="price-section">
              <h2 className="price">
                {vehicle.currency}
                {vehicle.price}
                <span className="price-unit">/день</span>
              </h2>

              <div className="location">
                <svg
                  className="location-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>{vehicle.location}</span>
              </div>

              <p className="description">{vehicle.description}</p>
            </div>

            <div className="specifications-section">
              <h3 className="section-title">Характеристики</h3>
              <div className="specs-grid">
                {vehicle.specifications.map((spec, index) => (
                  <div key={index} className="spec-item">
                    {renderSpecificationIcon(spec.icon)}
                    <span className="spec-text">
                      <span className="spec-name">{spec.name}: </span>
                      <strong>{spec.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="features-section">
              <h3 className="section-title">Особенности</h3>
              <ul className="features-grid">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-bullet"></span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="rent-button"
              onClick={() => {
                navigate(
                  `/pay?orderId=order-${
                    vehicle.id
                  }-${Date.now()}&userId=user-123&amount=${vehicle.price}`
                );
              }}
            >
              Арендовать сейчас
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
