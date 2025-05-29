import React from "react";
import { Link } from "../common/Link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import "../../styles/Footer.css"; // We'll create this CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-brand">RentBases</h3>
            <p className="footer-description">
              Найдите идеальное транспортное средство для своего путешествия.
              Арендуйте его у надежных местных поставщиков и насладитесь
              раскрепощающими впечатлениями от езды по открытым дорогам.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Быстрые ссылки</h3>
            <ul className="footer-links">
              <li>
                <Link href="/bikes" className="footer-link">
                  Мотоциклы
                </Link>
              </li>
              <li>
                <Link href="/cars" className="footer-link">
                  Автомобили
                </Link>
              </li>
              <li>
                <Link href="/locations" className="footer-link">
                  Местоположение
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="footer-link">
                  Как это работает?
                </Link>
              </li>
              <li>
                <Link href="/become-provider" className="footer-link">
                  Станьте поставщиком услуг
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Места</h3>
            <ul className="footer-links">
              <li>
                <Link href="/bikes/samui" className="footer-link">
                  Самуи
                </Link>
              </li>
              <li>
                <Link href="/cars/phuket" className="footer-link">
                  Пхукет
                </Link>
              </li>
              <li>
                <Link href="/bikes/bangkok" className="footer-link">
                  Бангкок
                </Link>
              </li>
              <li>
                <Link href="/cars/chiang-mai" className="footer-link">
                  Чиангмай
                </Link>
              </li>
              <li>
                <Link href="/bikes/pattaya" className="footer-link">
                  Паттайя
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Связаться с нами</h3>
            <ul className="contact-links">
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@rentride.com" className="footer-link">
                  info@rentride.com
                </a>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+6612345678" className="footer-link">
                  +66 123 456 78
                </a>
              </li>
            </ul>
            <div className="payment-methods">
              <h4 className="payment-title">Мы принимаем</h4>
              <div className="payment-icons">
                <div className="payment-icon"></div>
                <div className="payment-icon"></div>
                <div className="payment-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              &copy; {new Date().getFullYear()} RentBase
            </div>
            <div className="legal-links">
              <Link href="/terms" className="footer-link">
                Условия обслуживания
              </Link>
              <Link href="/privacy" className="footer-link">
                Политика конфиденциальности
              </Link>
              <Link href="/cookies" className="footer-link">
                Политика использования файлов cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
