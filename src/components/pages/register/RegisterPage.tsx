import React, { useState } from "react";
import { Link } from "../../common/Link";
import { useLanguage } from "../context/LanguageContext";
import "../../../styles/Register.css";
import UserTypeModal from "../../common/Modal";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [userType, setUserType] = useState<"driver" | "owner" | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [birthDate, setBirthDate] = useState({
    day: "28",
    month: language === "ru" ? "Мая" : "May",
    year: "2008",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      setShowUserTypeModal(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Пароли не совпадают");
      setSuccessMessage("");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setSuccessMessage("Вы успешно зарегистрировались!");
      setErrorMessage("");
    } catch (error: any) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
  };

  const handleUserTypeSelect = (type: "driver" | "owner") => {
    setUserType(type);
    localStorage.setItem("userType", type);
    setShowUserTypeModal(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">{t.register}</h1>

        <div className="auth-switch">
          {t.haveAccount} <Link href="/login">{t.login}</Link>
        </div>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {!userType ? (
          <div className="register-options">
            <button
              className="register-option"
              onClick={() => handleUserTypeSelect("driver")}
            >
              <h3>Я водитель, хочу арендовать</h3>
            </button>

            <button
              className="register-option"
              onClick={() => handleUserTypeSelect("owner")}
            >
              <h3>Я владелец, хочу сдавать</h3>
            </button>
          </div>
        ) : (
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
                    <option key={day} value={String(day)}>
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
                  {months[language].map((month) => (
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
                    <option key={year} value={String(year)}>
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

            <div className="form-notice">
              {t.acceptTerms} <Link href="/terms">{t.terms}</Link> {t.and}{" "}
              <Link href="/policies">{t.policies}</Link>.
            </div>

            <button type="submit" className="auth-button">
              {t.register}
            </button>
          </form>
        )}

        <div className="auth-footer">
          Copyright © 2024 Wroomo. All Rights Reserved.
        </div>
      </div>

      <UserTypeModal
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
        onSelect={handleUserTypeSelect}
      />
    </div>
  );
};

export default RegisterPage;
