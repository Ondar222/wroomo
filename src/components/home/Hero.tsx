import React from "react";
import { Search, Recycle as Motorcycle, Car } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] bg-gradient-to-r from-primary-900 to-primary-700 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Арендуйте транспорт для вашего идеального отдыха
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Прозрачные условия, безопасные платежи и только реальный транспорт
            от проверенных прокатных компаний и частных владельцев!
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Местоположение
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    placeholder="Поиск.."
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10"
                  />
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Дата
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="self-end">
                <button className="w-full md:w-auto px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-300 shadow-md">
                  Поиск
                </button>
              </div>
            </div>

            {/* Vehicle Type Selection */}
            <div className="flex justify-center mt-4 border-t pt-4">
              <div className="flex space-x-6">
                <button className="flex items-center space-x-2 py-2 px-4 bg-primary-50 text-primary-700 font-medium rounded-md">
                  <Motorcycle size={20} />
                  <span>Мотоциклы</span>
                </button>
                <button className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:bg-gray-100 font-medium rounded-md transition-colors">
                  <Car size={20} />
                  <span>Авто</span>
                </button>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full py-2 px-4 text-white text-sm">
              24/7 Поддержка
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full py-2 px-4 text-white text-sm">
              Бесплатная отмена бронирования
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full py-2 px-4 text-white text-sm">
              Лучшие цены
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
