import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe, User } from "lucide-react";
import { Link } from "../common/Link";
import "../../styles/Header.css"; // We'll create this CSS file

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

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

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          <Link href="/" className="header-logo">
            <span className="logo-text">Woomo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link href="/bikes" className="nav-link">
              Мотоциклы
            </Link>
            <Link href="/cars" className="nav-link">
              Автомобили
            </Link>
            <Link href="/locations" className="nav-link">
              Местоположение
            </Link>
            <Link href="/about" className="nav-link">
              О нас
            </Link>

            <div className="language-menu-container">
              <button onClick={toggleLanguageMenu} className="language-toggle">
                <Globe size={18} />
                <span>RU</span>
                <ChevronDown size={16} />
              </button>
              {languageMenuOpen && (
                <div className="language-dropdown">
                  <a href="#" className="language-option">
                    English
                  </a>
                  <a href="#" className="language-option">
                    Русский
                  </a>
                  <a href="#" className="language-option">
                    ไทย
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <Link href="/login" className="login-button">
              <User size={18} className="icon" />
              Войти
            </Link>
            <Link href="/register" className="register-button">
              Регистрация
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
            <nav className="mobile-nav">
              <Link href="/bikes" className="mobile-nav-link">
                Motorcycles
              </Link>
              <Link href="/cars" className="mobile-nav-link">
                Cars
              </Link>
              <Link href="/locations" className="mobile-nav-link">
                Locations
              </Link>
              <Link href="/about" className="mobile-nav-link">
                About Us
              </Link>
              <div className="mobile-language-section">
                <button className="mobile-language-button">
                  <Globe size={18} />
                  <span>Language: English</span>
                </button>
              </div>
              <div className="mobile-auth-section">
                <Link href="/login" className="mobile-nav-link">
                  Login
                </Link>
                <Link href="/register" className="mobile-register-button">
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
