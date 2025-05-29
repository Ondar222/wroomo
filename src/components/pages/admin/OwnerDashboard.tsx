import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Owner.css";
const OwnerDashboard: React.FC = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">В аренде</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">Забронировано</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">Недоступно</div>
          </div>
        </div>
      </div>

      <div className="dashboard-controls">
        <button className="control-button active">Транспорт</button>
        <button className="control-button">Календарь</button>
        <button className="control-button">Уведомления</button>
      </div>

      <div className="dashboard-filters">
        <div className="filter-group">
          <label>Тип транспорта</label>
          <select>
            <option>Все</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Марка</label>
          <select>
            <option>Все</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Модель</label>
          <select>
            <option>Все</option>
          </select>
        </div>
      </div>

      <div>
        <Link to="/dashboard/add-vehicle" className="add-vehicle-button">
          + Добавить транспорт
        </Link>
      </div>

      <div className="dashboard-content">
        <div className="empty-list">Список пуст</div>
      </div>

      <div className="dashboard-metrics">
        <div className="metric-card">
          <div className="metric-value">МИН</div>
          <div className="metric-description">
            Время вашего ответа. Среднее время подтверждения бронирования.
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-value">0%</div>
          <div className="metric-description">
            Подтвержденных бронирований. Вы подтверждаете 0 из 0 бронирований.
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-value">0</div>
          <div className="metric-description">
            Ваша оценка. Средняя оценка вашего сервиса по отзывам водителей.
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerDashboard;
