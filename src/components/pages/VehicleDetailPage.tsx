import React from "react";
import { useParams } from "react-router-dom";
import { Star, MapPin, Users, BarChart3, Car, Bike } from "lucide-react";
import { motorcycles, cars } from "../../data/vehicles";
import { VehicleType, MotorcycleType, CarType } from "../../types/vehicle";
import "../../styles/VehicleDetails.css"; // We'll create this CSS file

const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Combine motorcycles and cars arrays
  const allVehicles = [...motorcycles, ...cars];
  const vehicle = allVehicles.find((v) => v.id === id);

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
        return <Users size={16} className="spec-icon" />;
      case "engine":
        return <BarChart3 size={16} className="spec-icon" />;
      case "gear":
      // return <Gear size={16} className="spec-icon" />;
      case "door":
      // return <Door size={16} className="spec-icon" />;
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
                  <Bike size={20} className="vehicle-type-icon" />
                ) : (
                  <Car size={20} className="vehicle-type-icon" />
                )}
                <span className="type-badge">{vehicle.type}</span>
              </div>
              <div className="rating-container">
                <Star size={16} className="star-icon" />
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
                <MapPin size={14} className="location-icon" />
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

            <button className="rent-button">Арендовать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
