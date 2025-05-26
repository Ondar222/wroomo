import React, { useState } from "react";
import { Search, Recycle as Motorcycle, Car } from "lucide-react";
import "../../styles/Hero.css"; // We'll create this CSS file

const Hero: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    date: "",
    vehicleType: "motorcycle", // 'motorcycle' or 'car'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleVehicleTypeChange = (type: string) => {
    setSearchParams((prev) => ({
      ...prev,
      vehicleType: type,
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search parameters:", searchParams);
    // Add search logic here
  };

  return (
    <div className="hero-container">
      {/* Background image with overlay */}
      <div className="hero-background" />

      <div className="hero-content">
        <div className="hero-text">
          <h1>Арендуйте транспорт для вашего идеального отдыха</h1>
          <p>
            Прозрачные условия, безопасные платежи и только реальный транспорт
            от проверенных прокатных компаний и частных владельцев!
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-form-row">
              <div className="search-form-group">
                <label htmlFor="location">Местоположение</label>
                <div className="search-input-container">
                  <input
                    type="text"
                    id="location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    placeholder="Поиск.."
                    required
                  />
                  <Search className="search-icon" />
                </div>
              </div>

              <div className="search-form-group">
                <label htmlFor="date">Дата</label>
                <input
                  type="date"
                  id="date"
                  value={searchParams.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="search-button-container">
                <button type="submit" className="search-button">
                  Поиск
                </button>
              </div>
            </div>

            {/* Vehicle Type Selection */}
            <div className="vehicle-type-container">
              <div className="vehicle-type-buttons">
                <button
                  type="button"
                  onClick={() => handleVehicleTypeChange("motorcycle")}
                  className={`vehicle-type-button ${
                    searchParams.vehicleType === "motorcycle" ? "active" : ""
                  }`}
                >
                  <Motorcycle className="vehicle-icon" />
                  <span>Мото</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleVehicleTypeChange("car")}
                  className={`vehicle-type-button ${
                    searchParams.vehicleType === "car" ? "active" : ""
                  }`}
                >
                  <Car className="vehicle-icon" />
                  <span>Авто</span>
                </button>
              </div>
            </div>
          </form>

          {/* Badges */}
          <div className="badges-container">
            <div className="badge">24/7 Поддержка</div>
            <div className="badge">Бесплатная отмена бронирования</div>
            <div className="badge">Лучшие цены</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
