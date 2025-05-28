import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../../styles/Dashboard.css";

const DashboardPage: React.FC = () => {
  const { user, userType, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) return <div className="loading">Загрузка...</div>;

  if (!userType)
    return (
      <div className="dashboard-container">
        <h2>Не определён тип пользователя. Пожалуйста, войдите заново.</h2>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );

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

      {userType === "driver" && (
        <>
          <h2>Добро пожаловать, водитель!</h2>
          <p>Здесь вы можете арендовать авто или мотоцикл.</p>
          <div className="dashboard-controls">
            <button className="control-button active">
              Доступные транспортные средства
            </button>
            <button className="control-button">Мои бронирования</button>
            <button className="control-button">История аренды</button>
          </div>
          {/* Можно добавить список транспорта, фильтры и т.п. */}
          <div className="dashboard-content">
            <div className="empty-list">
              Пока у вас нет активных бронирований.
            </div>
          </div>
        </>
      )}

      {userType === "owner" && (
        <>
          <h2>Добро пожаловать, владелец!</h2>
          <p>Здесь вы можете управлять своим автопарком и сдавать транспорт.</p>
          <div className="dashboard-controls">
            <button className="control-button active">
              Мои транспортные средства
            </button>
            <button className="control-button">Бронирования</button>
            <button className="control-button">Отзывы</button>
          </div>
          {/* Аналогично — список авто/мото, статистика */}
          <div className="dashboard-content">
            <div className="empty-list">Пока вы не добавили транспорт.</div>
          </div>

          <div className="dashboard-metrics">
            <div className="metric-card">
              <div className="metric-value">0</div>
              <div className="metric-description">Активных арендаторов</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">0</div>
              <div className="metric-description">
                Общее количество бронирований
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-value">5.0</div>
              <div className="metric-description">Средняя оценка сервиса</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
