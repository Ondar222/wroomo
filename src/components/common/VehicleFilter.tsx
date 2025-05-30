import React, { useState, useEffect } from "react";
import "../../styles/PopularVehicles.css";
import { cars, motorcycles } from "../../data/vehicles";

type VehicleType = "all" | "car" | "motorcycle";

type FilterType = {
  vehicleType: VehicleType;
  category: string;
  year: string;
  transmission: string;
  fuelType: string;
  drive: string;
  location: string;
  brand: string;
};

interface VehicleFilterProps {
  onFilterChange: (filter: Partial<FilterType>) => void;
}

const getUniqueValues = (items: any[], key: string): string[] => {
  const values = items.map((item) => item[key]).filter(Boolean);
  return Array.from(new Set(values)).sort();
};

const VehicleFilter: React.FC<VehicleFilterProps> = ({ onFilterChange }) => {
  const [activeType, setActiveType] = useState<VehicleType>("all");

  const [filter, setFilter] = useState<FilterType>({
    vehicleType: "all",
    category: "all",
    year: "all",
    transmission: "all",
    fuelType: "all",
    drive: "all",
    location: "all",
    brand: "all",
  });

  const getCurrentData = () => {
    if (activeType === "car") return cars;
    if (activeType === "motorcycle") return motorcycles;
    return [...cars, ...motorcycles];
  };

  const data = getCurrentData();
  const categories = getUniqueValues(data, "category");
  const brands = getUniqueValues(data, "brand");
  const transmissions = getUniqueValues(data, "transmission");
  const drivetrains = getUniqueValues(cars, "drive"); // только для авто
  const locations = getUniqueValues(data, "location");

  const handleFilterChange = (updatedFields: Partial<FilterType>) => {
    const newFilter = { ...filter, ...updatedFields };
    setFilter(newFilter);

    onFilterChange({
      ...newFilter,
      drive: activeType === "car" ? newFilter.drive : "all",
      brand: activeType === "motorcycle" ? newFilter.brand : "all",
    });
  };

  useEffect(() => {
    handleFilterChange({ vehicleType: activeType });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeType]);

  return (
    <div className="vehicle-filter">
      <div className="filter-section">
        <div className="filter-type-buttons">
          {(["all", "car", "motorcycle"] as VehicleType[]).map((type) => (
            <button
              key={type}
              className={`filter-type-button ${
                activeType === type ? "active" : ""
              }`}
              onClick={() => setActiveType(type)}
            >
              {type === "all" ? "Все" : type === "car" ? "Авто" : "Мото"}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-dropdowns">
          <div className="filter-dropdown">
            <label htmlFor="category">Категория:</label>
            <select
              id="category"
              value={filter.category}
              onChange={(e) => handleFilterChange({ category: e.target.value })}
            >
              <option value="all">Все категории</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {activeType === "motorcycle" && (
            <div className="filter-dropdown">
              <label htmlFor="brand">Бренд:</label>
              <select
                id="brand"
                value={filter.brand}
                onChange={(e) => handleFilterChange({ brand: e.target.value })}
              >
                <option value="all">Все</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="filter-dropdown">
            <label htmlFor="transmission">Трансмиссия:</label>
            <select
              id="transmission"
              value={filter.transmission}
              onChange={(e) =>
                handleFilterChange({ transmission: e.target.value })
              }
            >
              <option value="all">Любая</option>
              {transmissions.map((trans) => (
                <option key={trans} value={trans}>
                  {trans}
                </option>
              ))}
            </select>
          </div>

          {activeType === "car" && (
            <div className="filter-dropdown">
              <label htmlFor="drivetrain">Привод:</label>
              <select
                id="drivetrain"
                value={filter.drive}
                onChange={(e) => handleFilterChange({ drive: e.target.value })}
              >
                <option value="all">Все</option>
                {drivetrains.map((drive) => (
                  <option key={drive} value={drive}>
                    {drive === "front"
                      ? "Передний"
                      : drive === "rear"
                      ? "Задний"
                      : drive === "full"
                      ? "Полный"
                      : drive}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="filter-dropdown">
            <label htmlFor="location">Местоположение:</label>
            <select
              id="location"
              value={filter.location}
              onChange={(e) => handleFilterChange({ location: e.target.value })}
            >
              <option value="all">Все</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
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
