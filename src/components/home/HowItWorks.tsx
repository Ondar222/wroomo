import React from "react";
import { Search, Calendar, CreditCard, Map } from "lucide-react";
import "../../styles/HowItWorks.css";

const steps = [
  {
    icon: <Search size={28} className="step-icon" />,
    title: "Найдите Свой автомобиль",
    description:
      "Просмотрите наш широкий выбор мотоциклов и автомобилей. Используйте фильтры, чтобы найти тот, который идеально соответствует вашим потребностям.",
  },
  {
    icon: <Calendar size={28} className="step-icon" />,
    title: "Бронируйте Свои даты",
    description:
      "Выберите даты доставки и возврата. Наш календарь показывает наличие мест в режиме реального времени.",
  },
  {
    icon: <CreditCard size={28} className="step-icon" />,
    title: "Обеспечьте безопасность с помощью депозита",
    description:
      "Внесите предоплату в размере 20% для подтверждения бронирования. Остальная сумма оплачивается при получении.",
  },
  {
    icon: <Map size={28} className="step-icon" />,
    title: "Наслаждайтесь поездкой",
    description:
      "Забирайте свой автомобиль в условленном месте и наслаждайтесь свободой передвижения!",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="howitworks-wrapper">
      <div className="howitworks-container">
        <div className="howitworks-header">
          <h2>Как это работает</h2>
          <p>
            Арендовать автомобиль у нас — это просто и безопасно. Следуйте этим
            простым шагам, чтобы быстро отправиться в путь.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-circle">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="step-number">{index + 1}</div>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
