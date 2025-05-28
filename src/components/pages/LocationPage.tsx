import React from "react";
import { useNavigate } from "react-router-dom";
import { motorcycles, cars } from "../../data/vehicles";
import { MotorcycleType, CarType } from "../../types/vehicle";
import "../../styles/LocationPage.css";

const LocationPage: React.FC = () => {
  const navigate = useNavigate();

  // Группировка транспорта по локациям
  const locations = [...motorcycles, ...cars].reduce((acc, vehicle) => {
    if (!acc[vehicle.location]) {
      acc[vehicle.location] = [];
    }
    acc[vehicle.location].push(vehicle);
    return acc;
  }, {} as Record<string, (MotorcycleType | CarType)[]>);

  const handleVehicleClick = (vehicle: MotorcycleType | CarType) => {
    navigate(`/vehicles/${vehicle.vehicleType}/${vehicle.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Аренда транспорта по локациям
      </h1>

      {Object.entries(locations).map(([location, vehicles]) => (
        <div key={location} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
            {location}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleVehicleClick(vehicle)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm font-semibold shadow-sm">
                    {vehicle.price} {vehicle.currency}/день
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1">
                        {vehicle.rating} ({vehicle.reviewCount})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    {vehicle.vehicleType === "motorcycle" ? (
                      <>
                        <svg
                          className="w-5 h-5 mr-1"
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
                        <span>Мотоцикл</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 mr-1"
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
                        <span>Автомобиль</span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {vehicle.specifications.slice(0, 3).map((spec, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 px-2 py-1 rounded-md text-sm flex items-center"
                      >
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-md text-sm font-medium ${
                        vehicle.available
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {vehicle.available ? "Доступно" : "Недоступно"}
                    </span>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
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
