import React from "react";
import VehicleCard from "../vehicle/VehicleCard";
import { VehicleType } from "../../types/vehicle";
import { motorcycles, cars } from "../../data/vehicles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/PopularVehicles.css";

interface PopularVehiclesProps {
  title: string;
  subtitle: string;
  vehicles: VehicleType[];
}

const VehicleCategory: React.FC<PopularVehiclesProps> = ({
  title,
  subtitle,
  vehicles,
}) => {
  return (
    <div className="vehicle-category">
      <div className="vehicle-category-container">
        <div className="vehicle-category-header">
          <div className="vehicle-category-title-group">
            <h2 className="vehicle-category-title">{title}</h2>
            <p className="vehicle-category-subtitle">{subtitle}</p>
          </div>
          <div className="vehicle-category-navigation">
            <button className="vehicle-category-nav-button">
              <ChevronLeft className="vehicle-category-nav-icon" size={20} />
            </button>
            <button className="vehicle-category-nav-button">
              <ChevronRight className="vehicle-category-nav-icon" size={20} />
            </button>
          </div>
        </div>

        <div className="vehicle-category-grid">
          {vehicles.slice(0, 4).map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PopularVehicles: React.FC = () => {
  return (
    <div className="popular-vehicles">
      <VehicleCategory
        title="Рекомендуемые мотоциклы"
        subtitle="Ознакомьтесь с нашими самыми популярными мотоциклами в Таиланде"
        vehicles={motorcycles}
      />
      <VehicleCategory
        title="Рекомендуемые автомобили"
        subtitle="Top-rated cars with exceptional reviews"
        vehicles={cars}
      />
    </div>
  );
};

export default PopularVehicles;
