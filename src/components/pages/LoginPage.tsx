import React, { useState } from "react";
import { Link } from "../common/Link";
import { useLanguage } from "./context/LanguageContext";
import "../../styles/AuthPages.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginPage: React.FC = () => {
  const { t } = useLanguage();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, login, password);
      setSuccessMessage("Вы успешно вошли!");
      setErrorMessage("");
    } catch (error: any) {
      setErrorMessage("Неверный логин или пароль");
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
