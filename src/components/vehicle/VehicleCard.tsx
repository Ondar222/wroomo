import React from "react";
import { Star, MapPin, Users, BarChart3 } from "lucide-react";
import { Link } from "../common/Link";
import { VehicleType } from "../../types/vehicle";
import "../../styles/VehicleCard.css"; // We'll create this CSS file

interface VehicleCardProps {
  vehicle: VehicleType;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const {
    id,
    name,
    type,
    image,
    price,
    currency,
    location,
    rating,
    reviewCount,
    year,
    specifications,
  } = vehicle;

  return (
    <div className="vehicle-card">
      <div className="vehicle-image-container">
        <Link href={`/vehicle/${id}`}>
          <img src={image} alt={name} className="vehicle-image" />
        </Link>
        <div className="vehicle-type-badge">
          <span className="type-label">{type}</span>
        </div>
      </div>

      <div className="vehicle-details">
        <div className="vehicle-header">
          <Link href={`/vehicle/${id}`} className="vehicle-name-link">
            <h3 className="vehicle-name">{name}</h3>
          </Link>
          <div className="vehicle-rating">
            <Star size={16} className="star-icon" />
            <span className="rating-value">{rating}</span>
            <span className="review-count">({reviewCount})</span>
          </div>
        </div>

        <div className="vehicle-meta">
          <MapPin size={14} className="location-icon" />
          <span className="location-text">{location}</span>
          <span className="separator">•</span>
          <span className="year-text">{year}</span>
        </div>

        <div className="vehicle-specs-section">
          <div className="specs-container">
            {specifications.map((spec, index) => (
              <div key={index} className="spec-badge">
                {spec.icon === "users" && (
                  <Users size={12} className="spec-icon" />
                )}
                {spec.icon === "engine" && (
                  <BarChart3 size={12} className="spec-icon" />
                )}
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="price-and-button">
            <div className="price-container">
              <span className="price-value">
                {currency}
                {price}
              </span>
              <span className="price-unit">/день</span>
            </div>
            <Link href={`/vehicle/${id}`} className="details-button">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
