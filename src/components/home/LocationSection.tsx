import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "../common/Link";

interface LocationProps {
  name: string;
  image: string;
  bikesCount: number;
  carsCount: number;
  slug: string;
}

const locations: LocationProps[] = [
  {
    name: "Остров Самуи",
    image:
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bikesCount: 124,
    carsCount: 56,
    slug: "samui",
  },
  {
    name: "Пхукет",
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bikesCount: 167,
    carsCount: 89,
    slug: "phuket",
  },
  {
    name: "Бангкок",
    image:
      "https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bikesCount: 210,
    carsCount: 133,
    slug: "bangkok",
  },
  {
    name: "Чиангмай",
    image:
      "https://images.pexels.com/photos/5827631/pexels-photo-5827631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bikesCount: 98,
    carsCount: 45,
    slug: "chiang-mai",
  },
];

const LocationCard: React.FC<LocationProps> = ({
  name,
  image,
  bikesCount,
  carsCount,
  slug,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="flex items-center mb-2">
          <MapPin size={16} className="mr-1" />
          <h3 className="text-xl font-bold">{name}</h3>
        </div>

        <div className="flex space-x-4 mb-3">
          <span className="text-sm">{bikesCount} Мото</span>
          <span className="text-sm">{carsCount} Авто</span>
        </div>

        <div className="flex space-x-2">
          <Link
            href={`/bikes/${slug}`}
            className="text-xs px-3 py-1.5 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors"
          >
            Посмотреть мото
          </Link>
          <Link
            href={`/cars/${slug}`}
            className="text-xs px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            Посмотреть авто
          </Link>
        </div>
      </div>
    </div>
  );
};

const LocationSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Популярные направления
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Откройте для себя наши лучшие пункты проката автомобилей по всему
            Таиланду. Будь то вы исследуете острова, городах, или в горах, мы
            имеем совершенный автомобиль для ваших приключений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
