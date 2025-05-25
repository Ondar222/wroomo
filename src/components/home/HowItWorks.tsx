import React from "react";
import { Search, Calendar, CreditCard, Map } from "lucide-react";

const steps = [
  {
    icon: <Search size={28} className="text-primary-600" />,
    title: "Найдите Свой автомобиль",
    description:
      "Просмотрите наш широкий выбор мотоциклов и автомобилей. Используйте фильтры, чтобы найти тот, который идеально соответствует вашим потребностям.",
  },
  {
    icon: <Calendar size={28} className="text-primary-600" />,
    title: "Бронируйте Свои даты",
    description:
      "Выберите даты доставки и возврата. Наш календарь показывает наличие мест в режиме реального времени.",
  },
  {
    icon: <CreditCard size={28} className="text-primary-600" />,
    title: "Обеспечьте безопасность с помощью депозита",
    description:
      "Внесите предоплату в размере 20% для подтверждения бронирования. Остальная сумма оплачивается при получении.",
  },
  {
    icon: <Map size={28} className="text-primary-600" />,
    title: "Наслаждайтесь поездкой",
    description:
      "Забирайте свой автомобиль в условленном месте и наслаждайтесь свободой передвижения!",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Как это работает
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Арендовать автомобиль у нас - это просто и безопасно. Следуйте этим
            простым инструкциям шаги, позволяющие быстро отправиться в путь.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Step number */}
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-200 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
