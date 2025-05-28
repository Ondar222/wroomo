import React from "react";

const DriverDashboard: React.FC = () => {
  return (
    <div className="driver-dashboard">
      <h2>Добро пожаловать, водитель!</h2>
      <div className="driver-options">
        <button className="driver-button">Поиск транспорта</button>
        <button className="driver-button">Мои бронирования</button>
        <button className="driver-button">История поездок</button>
      </div>
      <div className="driver-status">
        <p>У вас пока нет активных бронирований.</p>
      </div>
    </div>
  );
};

export default DriverDashboard;
