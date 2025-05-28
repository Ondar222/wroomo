import React, { useState, useEffect, createContext, useContext } from "react";
import { Menu, X, ChevronDown, Globe, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Header.css";
import { useAuth } from "../pages/context/AuthContext";

// Переводы
const translations = {
  en: {
    home: "Home",
    bikes: "Motorcycles",
    cars: "Cars",
    locations: "Locations",
    about: "About Us",
    login: "Login",
    register: "Register",
    language: "Language",
    dashboard: "Dashboard",
    logout: "Logout",
    logoutSuccess: "You have been logged out.",
  },
  ru: {
    home: "Главная",
    bikes: "Мотоциклы",
    cars: "Автомобили",
    locations: "Местоположение",
    about: "О нас",
    login: "Войти",
    register: "Регистрация",
    language: "Язык",
    dashboard: "Панель управления",
    logout: "Выход",
    logoutSuccess: "Вы вышли из системы.",
  },
  th: {
    home: "หน้าหลัก",
    bikes: "รถจักรยานยนต์",
    cars: "รถยนต์",
    locations: "ที่ตั้ง",
    about: "เกี่ยวกับเรา",
    login: "เข้าสู่ระบบ",
    register: "ลงทะเบียน",
    language: "ภาษา",
    dashboard: "แดชบอร์ด",
    logout: "ออกจากระบบ",
    logoutSuccess: "คุณได้ออกจากระบบแล้ว",
  },
};

// Контекст языка
const LanguageContext = createContext<{
  language: keyof typeof translations;
  setLanguage: (lang: keyof typeof translations) => void;
}>({
  language: "en",
  setLanguage: () => {},
});

// Навигационные ссылки
const NavLinks: React.FC<{ showDashboard?: boolean }> = ({ showDashboard }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const links = [
    { href: "/", text: t.home },
    { href: "/moto", text: t.bikes },
    { href: "/cars", text: t.cars },
    { href: "/locations", text: t.locations },
    { href: "/about", text: t.about },
  ];

  if (showDashboard) {
    links.push({ href: "/dashboard", text: t.dashboard });
  }

  return (
    <nav className="desktop-nav">
      {links.map((link) => (
        <Link key={link.href} to={link.href} className="nav-link">
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const { user, logout } = useAuth(); // ← ОБЯЗАТЕЛЬНО без опечаток

  const t = translations[language];
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);

  const changeLanguage = (lang: keyof typeof translations) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
    setIsMenuOpen(false);
  };

  const handleDashboardClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout(); // из useAuth
    toast.success("Вы вышли из аккаунта");
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            <span className="logo-text">Woomo</span>
          </Link>

          <NavLinks showDashboard={!!user} />

          <div className="language-menu-container">
            <button onClick={toggleLanguageMenu} className="language-toggle">
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
              <ChevronDown size={16} />
            </button>
            {languageMenuOpen && (
              <div className="language-dropdown">
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("ru")}>Русский</button>
                <button onClick={() => changeLanguage("th")}>ไทย</button>
              </div>
            )}
          </div>

          <div className="auth-buttons">
            {!user ? (
              <>
                <Link to="/login" className="login-button">
                  <User size={18} className="icon" />
                  {t.login}
                </Link>
                <Link to="/register" className="register-button">
                  {t.register}
                </Link>
              </>
            ) : (
              <>
                <button onClick={handleLogout} className="logout-button">
                  <User size={18} className="icon" />
                  {t.logout}
                </button>
              </>
            )}
          </div>

          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <NavLinks showDashboard={!!user} />
            <div className="mobile-language-section">
              <button className="mobile-language-button">
                <Globe size={18} />
                <span>
                  {t.language}: {language.toUpperCase()}
                </span>
              </button>
              <div className="mobile-language-options">
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("ru")}>Русский</button>
                <button onClick={() => changeLanguage("th")}>ไทย</button>
              </div>
            </div>

            <div className="mobile-auth-section">
              {!user ? (
                <>
                  <Link to="/login" className="mobile-nav-link">
                    {t.login}
                  </Link>
                  <Link to="/register" className="mobile-register-button">
                    {t.register}
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleDashboardClick}
                    className="mobile-nav-link"
                  >
                    {t.dashboard}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="mobile-nav-link logout-mobile-button"
                  >
                    {t.logout}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<keyof typeof translations>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Header;
