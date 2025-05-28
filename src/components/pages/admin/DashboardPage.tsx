import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../../styles/Dashboard.css";

const DashboardPage: React.FC = () => {
  const { user, loading, logout } = useAuth(); // Добавили logout
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login"); // После выхода - редирект на логин
  };

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Wroomo</h1>
        <nav className="dashboard-nav">
          <a href="#">Найти транспорт</a>
          <a href="#">Места</a>
          <a href="#">Новости</a>
          <a href="#">Блог</a>
          <a href="#">О нас</a>
          <button
            style={{
              marginLeft: "20px",
              padding: "6px 12px",
              cursor: "pointer",
              backgroundColor: "#e74c3c",
              border: "none",
              borderRadius: "4px",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={handleLogout}
          >
            Выход
          </button>
        </nav>
      </header>

      <div className="dashboard-stats">
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">В аренде</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">В аренде</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">Забронировано</div>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">Забронировано</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">Недоступно</div>
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
            {/* Другие варианты */}
          </select>
        </div>
        <div className="filter-group">
          <label>Марка</label>
          <select>
            <option>Все</option>
            {/* Другие варианты */}
          </select>
        </div>
        <div className="filter-group">
          <label>Модель</label>
          <select>
            <option>Все</option>
            {/* Другие варианты */}
          </select>
        </div>
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
    </div>
  );
};

export default DashboardPage;
