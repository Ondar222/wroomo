import React, { useState } from "react";
import { Link } from "../common/Link";
import { useLanguage } from "./context/LanguageContext";
import "../../styles/AuthPages.css";

const LoginPage: React.FC = () => {
  const { t } = useLanguage();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика входа
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">{t.login}</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="login">{t.username}</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t.password}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-footer">
            <div className="success-message">Успешно.</div>
            <Link href="/forgot-password" className="forgot-password">
              {t.forgotPassword}
            </Link>
          </div>

          <button type="submit" className="auth-button">
            {t.login}
          </button>
        </form>

        <div className="auth-switch">
          {t.noAccount} <Link href="/register">{t.register}</Link>
        </div>
      </div>

      <footer className="auth-footer">
        Copyright © 2024 Wroomo. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
