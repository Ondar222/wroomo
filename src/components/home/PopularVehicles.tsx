import React, { useState } from "react";
import VehicleCard from "../vehicle/VehicleCard";
import { CarType, MotorcycleType } from "../../types/vehicle";
import { motorcycles, cars } from "../../data/vehicles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VehicleFilter from "../common/VehicleFilter";
import "../../styles/PopularVehicles.css";

interface PopularVehiclesProps {
  title: string;
  subtitle: string;
  vehicles: (CarType | MotorcycleType)[];
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
  const [filteredMotorcycles, setFilteredMotorcycles] =
    useState<MotorcycleType[]>(motorcycles);
  const [filteredCars, setFilteredCars] = useState<CarType[]>(cars);

  const handleFilterChange = (filter: {
    vehicleType: "all" | "car" | "motorcycle";
    category: string;
    year: string;
    transmission: string;
    fuelType: string;
  }) => {
    // Фильтрация мотоциклов
    const newFilteredMotos = motorcycles.filter((moto) => {
      const matchesType =
        filter.vehicleType === "all" || filter.vehicleType === "motorcycle";

      const categoryParts = filter.category.split("-");
      const matchesCategory =
        filter.category === "all" ||
        (categoryParts.length === 1 && filter.category === moto.category) ||
        (categoryParts.length === 2 &&
          categoryParts[0] === "motorcycle" &&
          categoryParts[1] === moto.category);

      const matchesYear =
        filter.year === "all" || moto.year.toString() === filter.year;

      const matchesTransmission =
        filter.transmission === "all" ||
        moto.transmission === filter.transmission;

      const matchesFuelType =
        filter.fuelType === "all" || moto.fuelType === filter.fuelType;

      return (
        matchesType &&
        matchesCategory &&
        matchesYear &&
        matchesTransmission &&
        matchesFuelType
      );
    });

    // Фильтрация автомобилей
    const newFilteredCars = cars.filter((car) => {
      const matchesType =
        filter.vehicleType === "all" || filter.vehicleType === "car";

      const categoryParts = filter.category.split("-");
      const matchesCategory =
        filter.category === "all" ||
        (categoryParts.length === 1 && filter.category === car.category) ||
        (categoryParts.length === 2 &&
          categoryParts[0] === "car" &&
          categoryParts[1] === car.category);

      const matchesYear =
        filter.year === "all" || car.year.toString() === filter.year;

      const matchesTransmission =
        filter.transmission === "all" ||
        car.transmission === filter.transmission;

      const matchesFuelType =
        filter.fuelType === "all" || car.fuelType === filter.fuelType;

      return (
        matchesType &&
        matchesCategory &&
        matchesYear &&
        matchesTransmission &&
        matchesFuelType
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
          subtitle="Top-rated cars with exceptional reviews"
          vehicles={filteredCars}
        />
      )}
    </div>
  );
};

export default PopularVehicles;
