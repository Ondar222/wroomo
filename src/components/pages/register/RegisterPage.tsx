import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import "../../../styles/AuthPages.css";

const RegisterPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [birthDate, setBirthDate] = useState({
    day: "27",
    month: language === "ru" ? "Мая" : "May",
    year: "2008",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const months = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    ru: [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ],
    th: [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика регистрации
    setIsSuccess(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">{t.register}</h1>

        <div className="auth-switch">
          {t.haveAccount} <Link href="/login">{t.login}</Link>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="firstName">{t.firstName}</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="lastName">{t.lastName}</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>{t.birthDate}</label>
            <div className="date-selector">
              <select
                value={birthDate.day}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, day: e.target.value })
                }
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                value={birthDate.month}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, month: e.target.value })
                }
              >
                {months[language].map((month, index) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={birthDate.year}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, year: e.target.value })
                }
              >
                {Array.from(
                  { length: 100 },
                  (_, i) => new Date().getFullYear() - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t.password}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">{t.confirmPassword}</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {isSuccess && <div className="success-message">{t.success}</div>}

          <div className="form-notice">
            {t.acceptTerms} <Link href="/terms">{t.terms}</Link> {t.and}{" "}
            <Link href="/policies">{t.policies}</Link>.
          </div>

          <button type="submit" className="auth-button">
            {t.register}
          </button>
        </form>
      </div>

      <footer className="auth-footer">
        Copyright © 2024 Wroomo. All Rights Reserved.
      </footer>
    </div>
  );
};

export default RegisterPage;
