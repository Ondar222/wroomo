import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="dashboard-container">
      <h1>Панель управления</h1>
      <p>Добро пожаловать, {user?.email}</p>
      {/* Здесь можно разместить таблицы, виджеты и т.д. */}
    </div>
  );
};

export default DashboardPage;
