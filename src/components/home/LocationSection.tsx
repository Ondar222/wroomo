import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "../common/Link";
import "../../styles/LocationSection.css";

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
    <div className="location-card">
      <div className="location-card-image-container">
        <img src={image} alt={name} className="location-card-image" />
        <div className="location-card-overlay"></div>
      </div>

      <div className="location-card-content">
        <div className="location-card-header">
          <MapPin className="location-card-icon" size={16} />
          <h3 className="location-card-title">{name}</h3>
        </div>

        <div className="location-card-counts">
          <span className="location-card-count">{bikesCount} Мото</span>
          <span className="location-card-count">{carsCount} Авто</span>
        </div>

        <div className="location-card-buttons">
          <Link
            href={`/bikes/${slug}`}
            className="location-card-button location-card-button-primary"
          >
            Посмотреть мото
          </Link>
          <Link
            href={`/cars/${slug}`}
            className="location-card-button location-card-button-secondary"
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
    <div className="location-section">
      <div className="location-container">
        <div className="location-header">
          <h2 className="location-title">Популярные направления</h2>
          <p className="location-description">
            Откройте для себя наши лучшие пункты проката автомобилей по всему
            Таиланду. Будь то вы исследуете острова, городах, или в горах, мы
            имеем совершенный автомобиль для ваших приключений.
          </p>
        </div>

        <div className="location-grid">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
