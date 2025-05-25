export interface VehicleType {
  id: string;
  name: string;
  type: string;
  vehicleType: 'motorcycle' | 'car';
  brand: string;
  model: string;
  year: number;
  image: string;
  images: string[];
  price: number;
  currency: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  specifications: {
    name: string;
    value: string;
    icon: string;
  }[];
  available: boolean;
}

export interface MotorcycleType extends VehicleType {
  engineSize: number;
  engineType: string;
  transmission: 'automatic' | 'manual';
  fuelType: string;
  category: 'mini' | 'economy' | 'maxiscooter' | 'sport' | 'touring' | 'cruiser';
}

export interface CarType extends VehicleType {
  seats: number;
  doors: number;
  transmission: 'automatic' | 'manual';
  fuelType: string;
  category: 'compact' | 'sedan' | 'suv' | 'minivan' | 'luxury';
  trunkCapacity: string;
  airConditioned: boolean;
}