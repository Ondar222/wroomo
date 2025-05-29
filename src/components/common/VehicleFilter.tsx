import React, { useState } from "react";
import "../../styles/PopularVehicles.css";

interface VehicleFilterProps {
  onFilterChange: (filter: {
    vehicleType: "all" | "car" | "motorcycle";
    category: string;
    year: string;
    transmission: string;
    fuelType?: string;
    drivetrain?: string;
    location: string;
    brand?: string;
  }) => void;
}

const VehicleFilter: React.FC<VehicleFilterProps> = ({ onFilterChange }) => {
  const [activeType, setActiveType] = useState<"all" | "car" | "motorcycle">(
    "all"
  );
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [selectedFuelType, setSelectedFuelType] = useState("all");
  const [selectedDrivetrain, setSelectedDrivetrain] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const categories = {
    car: ["sedan", "suv", "minivan", "van", "pickup", "hatchback", "cabriolet"],
    motorcycle: [
      "Mini (up to 110cc)",
      "Economy (110-125cc)",
      "Medium (126-160cc)",
      "Maxi (161cc-350cc)",
    ],
  };

  const motorcycleBrands = [
    "all",
    "Honda",
    "Yamaha",
    "Suzuki",
    "Kawasaki",
    "GPX",
  ];
  const years = ["2023", "2022", "2021", "2020", "2019"];
  const locations = [
    { value: "all", label: "Все местоположения" },
    { value: "phuket", label: "Пхукет" },
    { value: "pattaya", label: "Паттайя" },
    { value: "bangkok", label: "Бангкок" },
    { value: "samui", label: "Остров Самуи" },
    { value: "krabi", label: "Краби" },
    { value: "hua-hin", label: "Хуа Хин" },
    { value: "koh-Phangan-Island", label: "Остров Панган" },
  ];

  const getFilterObject = () => ({
    vehicleType: activeType,
    category: selectedCategory,
    year: selectedYear,
    transmission: selectedTransmission,
    fuelType: activeType === "all" ? selectedFuelType : undefined,
    drivetrain: activeType === "car" ? selectedDrivetrain : undefined,
    location: selectedLocation,
    brand: activeType === "motorcycle" ? selectedBrand : undefined,
  });

  const handleFilterChange = (
    updatedFields: Partial<ReturnType<typeof getFilterObject>>
  ) => {
    const newFilter = {
      ...getFilterObject(),
      ...updatedFields,
    };
    onFilterChange(newFilter);
  };

  return (
    <div className="vehicle-filter">
      <div className="filter-section">
        <div className="filter-type-buttons">
          <button
            className={`filter-type-button ${
              activeType === "all" ? "active" : ""
            }`}
            onClick={() => {
              setActiveType("all");
              handleFilterChange({
                vehicleType: "all",
                category: "all",
                brand: "all",
              });
            }}
          >
            Все
          </button>
          <button
            className={`filter-type-button ${
              activeType === "car" ? "active" : ""
            }`}
            onClick={() => {
              setActiveType("car");
              handleFilterChange({
                vehicleType: "car",
                category: "all",
                brand: undefined,
              });
            }}
          >
            Авто
          </button>
          <button
            className={`filter-type-button ${
              activeType === "motorcycle" ? "active" : ""
            }`}
            onClick={() => {
              setActiveType("motorcycle");
              handleFilterChange({
                vehicleType: "motorcycle",
                category: "all",
                brand: "all",
              });
            }}
          >
            Мото
          </button>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-dropdowns">
          {/* Категория */}
          <div className="filter-dropdown">
            <label htmlFor="category">Категория:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                handleFilterChange({ category: e.target.value });
              }}
            >
              <option value="all">Все категории</option>
              {(activeType === "car" || activeType === "all") &&
                categories.car.map((cat) => (
                  <option key={`car-${cat}`} value={cat}>
                    Авто: {cat}
                  </option>
                ))}
              {(activeType === "motorcycle" || activeType === "all") &&
                categories.motorcycle.map((cat) => (
                  <option key={`moto-${cat}`} value={cat}>
                    Мото: {cat}
                  </option>
                ))}
            </select>
          </div>

          {/* Бренд */}
          {activeType === "motorcycle" && (
            <div className="filter-dropdown">
              <label htmlFor="brand">Бренд:</label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  handleFilterChange({ brand: e.target.value });
                }}
              >
                {motorcycleBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand === "all" ? "Все" : brand}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Год */}
          <div className="filter-dropdown">
            <label htmlFor="year">Год выпуска:</label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                handleFilterChange({ year: e.target.value });
              }}
            >
              <option value="all">Все года</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Трансмиссия */}
          <div className="filter-dropdown">
            <label htmlFor="transmission">Трансмиссия:</label>
            <select
              id="transmission"
              value={selectedTransmission}
              onChange={(e) => {
                setSelectedTransmission(e.target.value);
                handleFilterChange({ transmission: e.target.value });
              }}
            >
              <option value="all">Любая</option>
              <option value="automatic">Автомат</option>
              <option value="manual">Механика</option>
            </select>
          </div>

          {/* Привод (только для авто) */}
          {activeType === "car" && (
            <div className="filter-dropdown">
              <label htmlFor="drivetrain">Привод:</label>
              <select
                id="drivetrain"
                value={selectedDrivetrain}
                onChange={(e) => {
                  setSelectedDrivetrain(e.target.value);
                  handleFilterChange({ drivetrain: e.target.value });
                }}
              >
                <option value="all">Все</option>
                <option value="front">Передний</option>
                <option value="all-wheel">Полный</option>
                <option value="rear">Задний</option>
              </select>
            </div>
          )}

          {/* Топливо (только для "все") */}
          {activeType === "all" && (
            <div className="filter-dropdown">
              <label htmlFor="fuelType">Тип топлива:</label>
              <select
                id="fuelType"
                value={selectedFuelType}
                onChange={(e) => {
                  setSelectedFuelType(e.target.value);
                  handleFilterChange({ fuelType: e.target.value });
                }}
              >
                <option value="all">Любой</option>
                <option value="gasoline">Бензин</option>
                <option value="diesel">Дизель</option>
                <option value="electric">Электро</option>
                <option value="hybrid">Гибрид</option>
              </select>
            </div>
          )}

          {/* Локация */}
          <div className="filter-dropdown">
            <label htmlFor="location">Местоположение:</label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                handleFilterChange({ location: e.target.value });
              }}
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
