import React from "react";
import { Star, MapPin, Users, BarChart3 } from "lucide-react";
import { Link } from "../common/Link";
import { VehicleType } from "../../types/vehicle";

interface VehicleCardProps {
  vehicle: VehicleType;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const {
    id,
    name,
    type,
    image,
    price,
    currency,
    location,
    rating,
    reviewCount,
    year,
    specifications,
  } = vehicle;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Link href={`/vehicle/${id}`}>
          <img src={image} alt={name} className="w-full h-48 object-cover" />
        </Link>
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {type}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/vehicle/${id}`} className="hover:text-primary-600">
            <h3 className="text-lg font-semibold">{name}</h3>
          </Link>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
            <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
          <span className="mx-2">•</span>
          <span>{year}</span>
        </div>

        <div className="border-t border-gray-100 pt-3 mt-2">
          <div className="flex flex-wrap gap-2 mb-3">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="flex items-center text-xs bg-gray-100 rounded-full px-2 py-1"
              >
                {spec.icon === "users" && <Users size={12} className="mr-1" />}
                {spec.icon === "engine" && (
                  <BarChart3 size={12} className="mr-1" />
                )}
                <span>{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl font-bold text-primary-700">
                {currency}
                {price}
              </span>
              <span className="text-sm text-gray-500 ml-1">/день</span>
            </div>
            <Link
              href={`/vehicle/${id}`}
              className="px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded transition-colors"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
