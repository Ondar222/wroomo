import React from "react";
import { CarType, MotorcycleType } from "../../types/vehicle";
import "../../styles/VehicleCard.css";
import { Link } from "../common/Link";

interface VehicleCardProps {
  vehicle: CarType | MotorcycleType;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const isMotorcycle = vehicle.vehicleType === "motorcycle";

  return (
    <div className="vehicle-card">
      <div className="vehicle-card-image-container">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="vehicle-card-image"
          loading="lazy"
        />
        {!vehicle.available && <div className="vehicle-card-badge">Занят</div>}
      </div>

      <div className="vehicle-card-content">
        <div className="vehicle-card-header">
          <h3 className="vehicle-card-title">
            {vehicle.brand} {vehicle.model}
          </h3>
          <div className="vehicle-card-rating">
            <span className="vehicle-card-rating-star">★</span>
            <span>{vehicle.rating.toFixed(1)}</span>
            <span className="vehicle-card-reviews">
              ({vehicle.reviewCount})
            </span>
          </div>
        </div>

        <div className="vehicle-card-specs">
          <div className="vehicle-card-spec">
            <span className="vehicle-card-spec-label">Год:</span>
            <span>{vehicle.year}</span>
          </div>

          {isMotorcycle ? (
            <>
              <div className="vehicle-card-spec">
                <span className="vehicle-card-spec-label">Объем:</span>
                <span>{(vehicle as MotorcycleType).engineSize}cc</span>
              </div>
              <div className="vehicle-card-spec">
                <span className="vehicle-card-spec-label">Тип:</span>
                <span className="vehicle-card-spec-value">
                  {(vehicle as MotorcycleType).category}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="vehicle-card-spec">
                <span className="vehicle-card-spec-label">Мест:</span>
                <span>{(vehicle as CarType).seats}</span>
              </div>
              <div className="vehicle-card-spec">
                <span className="vehicle-card-spec-label">Тип:</span>
                <span className="vehicle-card-spec-value">
                  {(vehicle as CarType).category}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="vehicle-card-footer">
          <div className="vehicle-card-price">
            {vehicle.price} {vehicle.currency}/день
          </div>
          <div className="vehicle-card-location">
            <div className="vehicle-card-location-text">
              <svg
                className="vehicle-card-location-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {vehicle.location}
            </div>

            <div className="price-and-button">
              <Link href={`/vehicle/${vehicle.id}`} className="details-button">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
