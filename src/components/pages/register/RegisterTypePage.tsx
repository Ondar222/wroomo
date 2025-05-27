import React from "react";
// import Link from "next/link";
// import { Link } from "../../common/Link";
import { Link } from "../../common/Link";
import { useLanguage } from "../context/LanguageContext";
import "../../../styles/AuthPages.css";

const RegisterTypePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Регистрация</h1>

        <div className="auth-switch">
          Уже есть аккаунт? <Link href="/login">Войти</Link>
        </div>

        <div className="register-options">
          <Link href="/register/driver" className="register-option">
            <h3>Я водитель, хочу арендовать</h3>
          </Link>

          <Link href="/register/owner" className="register-option">
            <h3>Я владелец, хочу сдавать</h3>
          </Link>
        </div>

        <div className="next-button-container">
          <Link href="/register" className="next-button">
            Далее
          </Link>
        </div>
      </div>

      <div className="auth-footer">
        Copyright © 2024 Wroomo. All Rights Reserved.
      </div>
    </div>
  );
};

export default RegisterTypePage;
