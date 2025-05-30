import React, { useState } from "react";
import VehicleCard from "../vehicle/VehicleCard";
import { CarType, MotorcycleType } from "../../types/vehicle";
import { motorcycles, cars } from "../../data/vehicles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VehicleFilter from "../common/VehicleFilter";
import "../../styles/PopularVehicles.css";

const VehicleCategory = ({
  title,
  subtitle,
  vehicles,
}: {
  title: string;
  subtitle: string;
  vehicles: (CarType | MotorcycleType)[];
}) => (
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

const PopularVehicles: React.FC = () => {
  const [filteredMotorcycles, setFilteredMotorcycles] =
    useState<MotorcycleType[]>(motorcycles);
  const [filteredCars, setFilteredCars] = useState<CarType[]>(cars);

  const handleFilterChange = (filter: any) => {
    const newFilteredMotos = motorcycles.filter((moto) => {
      return (
        (filter.vehicleType === "all" || filter.vehicleType === "motorcycle") &&
        (filter.category === "all" || moto.category === filter.category) &&
        (filter.transmission === "all" ||
          moto.transmission === filter.transmission) &&
        (filter.fuelType === "all" || moto.fuelType === filter.fuelType) &&
        (filter.brand === "all" || moto.brand === filter.brand) &&
        (filter.location === "all" || moto.location === filter.location)
      );
    });

    const newFilteredCars = cars.filter((car) => {
      return (
        (filter.vehicleType === "all" || filter.vehicleType === "car") &&
        (filter.category === "all" || car.category === filter.category) &&
        (filter.transmission === "all" ||
          car.transmission === filter.transmission) &&
        (filter.fuelType === "all" || car.fuelType === filter.fuelType) &&
        (filter.drivetrain === "all" || car.drive === filter.drive) &&
        (filter.location === "all" || car.location === filter.location)
      );
    });

    setFilteredMotorcycles(newFilteredMotos);
    setFilteredCars(newFilteredCars);
  };

  return (
    <div className="popular-vehicles">
      <VehicleFilter onFilterChange={handleFilterChange} />

      {filteredMotorcycles.length > 0 && (
        <VehicleCategory
          title="Рекомендуемые мотоциклы"
          subtitle="Ознакомьтесь с нашими самыми популярными мотоциклами в Таиланде"
          vehicles={filteredMotorcycles}
        />
      )}

      {filteredCars.length > 0 && (
        <VehicleCategory
          title="Рекомендуемые автомобили"
          subtitle="Лучшие автомобили по отзывам"
          vehicles={filteredCars}
        />
      )}
    </div>
  );
};

export default PopularVehicles;
