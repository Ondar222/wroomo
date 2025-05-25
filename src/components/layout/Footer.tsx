import React from "react";
import { Link } from "../common/Link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Woomo</h3>
            <p className="text-gray-400 mb-4">
              Найдите идеальное транспортное средство для своего путешествия.
              Арендуйте его у надежных местных поставщиков и насладитесь
              раскрепощающими впечатлениями от езды по открытым дорогам.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/bikes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Мотоциклы
                </Link>
              </li>
              <li>
                <Link
                  href="/cars"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Автомобили
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Местоположение
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Как это работает?
                </Link>
              </li>
              <li>
                <Link
                  href="/become-provider"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Станьте поставщиком услуг
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Места</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/bikes/samui"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Самуи
                </Link>
              </li>
              <li>
                <Link
                  href="/cars/phuket"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Пхукет
                </Link>
              </li>
              <li>
                <Link
                  href="/bikes/bangkok"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Бангкок
                </Link>
              </li>
              <li>
                <Link
                  href="/cars/chiang-mai"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Чиангмай
                </Link>
              </li>
              <li>
                <Link
                  href="/bikes/pattaya"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Паттайя
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-400" />
                <a
                  href="mailto:info@rentride.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@rentride.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-400" />
                <a
                  href="tel:+6612345678"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +66 123 456 78
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Мы принимаем</h4>
              <div className="flex space-x-2">
                <div className="bg-white rounded p-1 h-6 w-10"></div>
                <div className="bg-white rounded p-1 h-6 w-10"></div>
                <div className="bg-white rounded p-1 h-6 w-10"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Woomo
            </div>
            <div className="flex space-x-4">
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Условия обслуживания
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-white transition-colors"
              >
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
