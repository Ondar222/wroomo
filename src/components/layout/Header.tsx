import React, { useState, useEffect, createContext, useContext } from "react";
import { Menu, X, ChevronDown, Globe, User } from "lucide-react";
import { Link } from "../common/Link";
import "../../styles/Header.css";

// Define translations
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
  },
};

// Create context for language
const LanguageContext = createContext<{
  language: keyof typeof translations;
  setLanguage: (lang: keyof typeof translations) => void;
}>({
  language: "en",
  setLanguage: () => {},
});

// Navigation links component to avoid duplication
const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const LinkComponent = isMobile ? "div" : "nav";

  const links = [
    { href: "/", text: t.home },
    { href: "/bikes", text: t.bikes },
    { href: "/cars", text: t.cars },
    { href: "/locations", text: t.locations },
    { href: "/about", text: t.about },
  ];

  return (
    <LinkComponent className={isMobile ? "mobile-nav" : "desktop-nav"}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={isMobile ? "mobile-nav-link" : "nav-link"}
        >
          {link.text}
        </Link>
      ))}
    </LinkComponent>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);

  const changeLanguage = (lang: keyof typeof translations) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const t = translations[language];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          <Link href="/" className="header-logo">
            <span className="logo-text">Woomo</span>
          </Link>

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Language Selector */}
          <div className="language-menu-container">
            <button onClick={toggleLanguageMenu} className="language-toggle">
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
              <ChevronDown size={16} />
            </button>
            {languageMenuOpen && (
              <div className="language-dropdown">
                <button
                  onClick={() => changeLanguage("en")}
                  className="language-option"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className="language-option"
                >
                  Русский
                </button>
                <button
                  onClick={() => changeLanguage("th")}
                  className="language-option"
                >
                  ไทย
                </button>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <Link href="/login" className="login-button">
              <User size={18} className="icon" />
              {t.login}
            </Link>
            <Link href="/register" className="register-button">
              {t.register}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <NavLinks isMobile />
            <div className="mobile-language-section">
              <button className="mobile-language-button">
                <Globe size={18} />
                <span>
                  {t.language}: {language.toUpperCase()}
                </span>
              </button>
              <div className="mobile-language-options">
                <button
                  onClick={() => changeLanguage("en")}
                  className="mobile-language-option"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className="mobile-language-option"
                >
                  Русский
                </button>
                <button
                  onClick={() => changeLanguage("th")}
                  className="mobile-language-option"
                >
                  ไทย
                </button>
              </div>
            </div>
            <div className="mobile-auth-section">
              <Link href="/login" className="mobile-nav-link">
                {t.login}
              </Link>
              <Link href="/register" className="mobile-register-button">
                {t.register}
              </Link>
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
