import React from "react";
import { CarType, MotorcycleType } from "../../types/vehicle";
import "../../styles/PopularVehicles.css";

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
        />
        {!vehicle.available && <div className="vehicle-card-badge">Занят</div>}
      </div>

      <div className="vehicle-card-content">
        <h3 className="vehicle-card-title">
          {vehicle.brand} {vehicle.model}
        </h3>

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
                <span>{(vehicle as MotorcycleType).category}</span>
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
                <span>{(vehicle as CarType).category}</span>
              </div>
            </>
          )}
        </div>

        <div className="vehicle-card-price">
          {vehicle.price} {vehicle.currency}/день
        </div>

        <div className="vehicle-card-footer">
          <div className="vehicle-card-location">{vehicle.location}</div>
          <div className="vehicle-card-rating">
            ★ {vehicle.rating.toFixed(1)} ({vehicle.reviewCount})
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
