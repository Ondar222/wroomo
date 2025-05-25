import React from "react";
import VehicleCard from "../vehicle/VehicleCard";
import { VehicleType } from "../../types/vehicle";
import { motorcycles, cars } from "../../data/vehicles";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    <>
      <VehicleCategory
        title="Рекомендуемые  мотоциклы"
        subtitle="Ознакомьтесь с нашими самыми популярными мотоциклами в Таиланде"
        vehicles={motorcycles}
      />
      <VehicleCategory
        title="Рекомендуемые автомобили"
        subtitle="Top-rated cars with exceptional reviews"
        vehicles={cars}
      />
    </>
  );
};

export default PopularVehicles;
