import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe, User } from "lucide-react";
import { Link } from "../common/Link";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-700">Woomo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-1 nav-link"
              >
                <Globe size={18} />
                <span>RU</span>
                <ChevronDown size={16} />
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-xl z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Русский
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    ไทย
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="flex items-center text-primary-700 hover:text-primary-800 font-medium"
            >
              <User size={18} className="mr-1" />
              Войти
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
            >
              Регистрация
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
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
              <div className="pt-2 border-t border-gray-200">
                <button className="flex items-center space-x-2 mobile-nav-link">
                  <Globe size={18} />
                  <span>Language: English</span>
                </button>
              </div>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <Link href="/login" className="mobile-nav-link">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors text-center"
                >
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
