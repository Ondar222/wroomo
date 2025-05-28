import React from "react";
import { useNavigate } from "react-router-dom";
import { motorcycles, cars } from "../../data/vehicles";
import { MotorcycleType, CarType } from "../../types/vehicle";
import "../../styles/LocationPage.css";

const locationImages: Record<string, string> = {
  "Остров Самуи":
    "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg",
  Пхукет: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg",
  Бангкок: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
  Чиангмай:
    "https://images.pexels.com/photos/3532550/pexels-photo-3532550.jpeg",
  "Chiang Mai":
    "https://images.pexels.com/photos/3532550/pexels-photo-3532550.jpeg",
};

const LocationPage: React.FC = () => {
  const navigate = useNavigate();

  const locations = [...motorcycles, ...cars].reduce((acc, vehicle) => {
    const locationName = vehicle.location;
    if (!acc[locationName]) {
      acc[locationName] = {
        vehicles: [],
        image:
          locationImages[locationName] ||
          "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg",
      };
    }
    acc[locationName].vehicles.push(vehicle);
    return acc;
  }, {} as Record<string, { vehicles: (MotorcycleType | CarType)[]; image: string }>);

  const handleVehicleClick = (vehicle: MotorcycleType | CarType) => {
    navigate(`/vehicles/${vehicle.vehicleType}/${vehicle.id}`);
  };

  return (
    <div className="container">
      <h1 className="title">Аренда транспорта по локациям</h1>

      {Object.entries(locations).map(([location, { vehicles, image }]) => (
        <div key={location} className="location-section">
          {/* Баннер локации */}
          <div className="location-banner">
            <img src={image} alt={location} className="location-image" />
            <div className="location-overlay">
              <h2 className="location-title">{location}</h2>
            </div>
            <div className="location-count">
              {vehicles.length}{" "}
              {vehicles.length === 1
                ? "транспорт"
                : vehicles.length < 5
                ? "транспорта"
                : "транспортов"}
            </div>
          </div>

          {/* Карточки транспорта */}
          <div className="vehicles-grid">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="vehicle-card"
                onClick={() => handleVehicleClick(vehicle)}
              >
                <div className="vehicle-image-wrapper">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-image"
                  />
                  <div className="vehicle-price">
                    {vehicle.price} {vehicle.currency}/день
                  </div>
                </div>

                <div className="vehicle-info">
                  <div className="vehicle-header">
                    <h3 className="vehicle-name">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <div className="vehicle-rating">
                      <svg
                        className="star-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="rating-text">
                        {vehicle.rating} ({vehicle.reviewCount})
                      </span>
                    </div>
                  </div>

                  <div className="vehicle-type">
                    {vehicle.vehicleType === "motorcycle" ? (
                      <>
                        <svg
                          className="icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
                        <span>Мотоцикл • {vehicle.type}</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                        <span>Автомобиль • {vehicle.type}</span>
                      </>
                    )}
                  </div>

                  <div className="vehicle-specs">
                    {vehicle.specifications.slice(0, 3).map((spec, index) => (
                      <div key={index} className="spec-item">
                        {spec.value}
                      </div>
                    ))}
                  </div>

                  <div className="vehicle-footer">
                    <span
                      className={`availability ${
                        vehicle.available ? "available" : "unavailable"
                      }`}
                    >
                      {vehicle.available ? "Доступно" : "Недоступно"}
                    </span>
                    <button
                      className="details-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVehicleClick(vehicle);
                      }}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationPage;
