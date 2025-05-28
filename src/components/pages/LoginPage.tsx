import React, { useState } from "react";
import { Link } from "../common/Link";
import { useLanguage } from "./context/LanguageContext";
import "../../styles/AuthPages.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { t } = useLanguage();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = login.trim().toLowerCase();
    const pwd = password;

    if (!email || !pwd) {
      setErrorMessage("Введите email и пароль");
      setSuccessMessage("");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      setSuccessMessage("Вы успешно вошли!");
      setErrorMessage("");

      // Перенаправление на Dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error: any) {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-email") {
        setErrorMessage("Неверный формат email");
      } else if (errorCode === "auth/user-not-found") {
        setErrorMessage("Пользователь не найден");
      } else if (errorCode === "auth/wrong-password") {
        setErrorMessage("Неверный пароль");
      } else {
        setErrorMessage("Ошибка входа: " + error.message);
      }
      setSuccessMessage("");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">{t.login}</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="form-group">
            <label htmlFor="login">{t.username}</label>
            <input
              type="email"
              id="login"
              name="email"
              autoComplete="email"
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
              name="current-password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            {t.login}
          </button>
        </form>

        <div className="auth-switch">
          {t.noAccount} <Link href="/register">{t.register}</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
