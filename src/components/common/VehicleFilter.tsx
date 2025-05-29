import React, { useState } from "react";
import "../../styles/PopularVehicles.css";
import { CarType, MotorcycleType, VehicleType } from "../../types/vehicle";

interface VehicleFilterProps {
  onFilterChange: (filter: {
    vehicleType: "all" | "car" | "motorcycle";
    category: string;
    year: string;
    transmission: string;
    fuelType: string;
    location: string;
  }) => void;
}

const VehicleFilter: React.FC<VehicleFilterProps> = ({ onFilterChange }) => {
  const [activeType, setActiveType] = useState<"all" | "car" | "motorcycle">(
    "all"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTransmission, setSelectedTransmission] =
    useState<string>("all");
  const [selectedFuelType, setSelectedFuelType] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const categories = {
    all: "Все",
    car: ["compact", "sedan", "suv", "minivan", "luxury"],
    motorcycle: [
      "mini",
      "economy",
      "maxiscooter",
      "sport",
      "touring",
      "cruiser",
    ],
  };

  const years = ["2023", "2022", "2021", "2020", "2019"];
  const transmissions = ["all", "automatic", "manual"];
  const fuelTypes = ["all", "gasoline", "diesel", "electric", "hybrid"];
  const locations = [
    { value: "all", label: "Все местоположения" },
    { value: "phuket", label: "Пхукет" },
    { value: "pattaya", label: "Паттайя" },
    { value: "bangkok", label: "Бангкок" },
    { value: "samui", label: "Остров Самуи" },
    { value: "chiang-mai", label: "Чианг Май" },
    { value: "krabi", label: "Краби" },
    { value: "hua-hin", label: "Хуа Хин" },
  ];

  const handleTypeChange = (type: "all" | "car" | "motorcycle") => {
    setActiveType(type);
    setSelectedCategory("all");
    onFilterChange({
      vehicleType: type,
      category: "all",
      year: selectedYear,
      transmission: selectedTransmission,
      fuelType: selectedFuelType,
      location: selectedLocation,
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({
      vehicleType: activeType,
      category,
      year: selectedYear,
      transmission: selectedTransmission,
      fuelType: selectedFuelType,
      location: selectedLocation,
    });
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    onFilterChange({
      vehicleType: activeType,
      category: selectedCategory,
      year,
      transmission: selectedTransmission,
      fuelType: selectedFuelType,
      location: selectedLocation,
    });
  };

  const handleTransmissionChange = (transmission: string) => {
    setSelectedTransmission(transmission);
    onFilterChange({
      vehicleType: activeType,
      category: selectedCategory,
      year: selectedYear,
      transmission,
      fuelType: selectedFuelType,
      location: selectedLocation,
    });
  };

  const handleFuelTypeChange = (fuelType: string) => {
    setSelectedFuelType(fuelType);
    onFilterChange({
      vehicleType: activeType,
      category: selectedCategory,
      year: selectedYear,
      transmission: selectedTransmission,
      fuelType,
      location: selectedLocation,
    });
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    onFilterChange({
      vehicleType: activeType,
      category: selectedCategory,
      year: selectedYear,
      transmission: selectedTransmission,
      fuelType: selectedFuelType,
      location,
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      mini: "Мини",
      economy: "Эконом",
      maxiscooter: "Макси-скутер",
      sport: "Спорт",
      touring: "Туринг",
      cruiser: "Круизер",
      compact: "Компакт",
      sedan: "Седан",
      suv: "Внедорожник",
      minivan: "Минивэн",
      luxury: "Люкс",
    };
    return labels[category] || category;
  };

  return (
    <div className="vehicle-filter">
      <div className="filter-section">
        <div className="filter-type-buttons">
          <button
            className={`filter-type-button ${
              activeType === "all" ? "active" : ""
            }`}
            onClick={() => handleTypeChange("all")}
          >
            Все
          </button>
          <button
            className={`filter-type-button ${
              activeType === "car" ? "active" : ""
            }`}
            onClick={() => handleTypeChange("car")}
          >
            Авто
          </button>
          <button
            className={`filter-type-button ${
              activeType === "motorcycle" ? "active" : ""
            }`}
            onClick={() => handleTypeChange("motorcycle")}
          >
            Мото
          </button>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-dropdowns">
          <div className="filter-dropdown">
            <label htmlFor="category">Категория:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="all">Все категории</option>
              {activeType === "all" && (
                <>
                  {categories.car.map((cat) => (
                    <option key={`car-${cat}`} value={`car-${cat}`}>
                      Авто: {getCategoryLabel(cat)}
                    </option>
                  ))}
                  {categories.motorcycle.map((cat) => (
                    <option
                      key={`motorcycle-${cat}`}
                      value={`motorcycle-${cat}`}
                    >
                      Мото: {getCategoryLabel(cat)}
                    </option>
                  ))}
                </>
              )}
              {activeType === "car" &&
                categories.car.map((cat) => (
                  <option key={cat} value={cat}>
                    {getCategoryLabel(cat)}
                  </option>
                ))}
              {activeType === "motorcycle" &&
                categories.motorcycle.map((cat) => (
                  <option key={cat} value={cat}>
                    {getCategoryLabel(cat)}
                  </option>
                ))}
            </select>
          </div>

          <div className="filter-dropdown">
            <label htmlFor="year">Год выпуска:</label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => handleYearChange(e.target.value)}
            >
              <option value="all">Все года</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-dropdown">
            <label htmlFor="transmission">Трансмиссия:</label>
            <select
              id="transmission"
              value={selectedTransmission}
              onChange={(e) => handleTransmissionChange(e.target.value)}
            >
              <option value="all">Любая</option>
              <option value="automatic">Автомат</option>
              <option value="manual">Механика</option>
            </select>
          </div>

          <div className="filter-dropdown">
            <label htmlFor="fuelType">Тип топлива:</label>
            <select
              id="fuelType"
              value={selectedFuelType}
              onChange={(e) => handleFuelTypeChange(e.target.value)}
            >
              <option value="all">Любой</option>
              <option value="gasoline">Бензин</option>
              <option value="diesel">Дизель</option>
              <option value="electric">Электро</option>
              <option value="hybrid">Гибрид</option>
            </select>
          </div>

          <div className="filter-dropdown">
            <label htmlFor="location">Местоположение:</label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
            >
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilter;
