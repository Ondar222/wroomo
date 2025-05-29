import React, { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/VehicleCreation.css";

interface VehicleFormData {
  name: string;
  type: string;
  vehicleType: "car" | "motorcycle";
  brand: string;
  model: string;
  year: string;
  price: string;
  description: string;
  location: string;
  transmission: string;
  fuelType: string;
  category: string;
  // Дополнительные поля для автомобилей
  seats?: string;
  doors?: string;
  trunkCapacity?: string;
  airConditioned?: boolean;
  // Дополнительные поля для мотоциклов
  engineSize?: string;
  engineType?: string;
}

const VehicleCreationPage: React.FC = () => {
  const { user, userType, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<VehicleFormData>({
    name: "",
    type: "",
    vehicleType: "car",
    brand: "",
    model: "",
    year: "",
    price: "",
    description: "",
    location: "",
    transmission: "automatic",
    fuelType: "gasoline",
    category: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const carCategories = [
    "sedan",
    "suv",
    "minivan",
    "van",
    "pickup",
    "hatchback",
    "cabriolet",
  ];
  const motorcycleCategories = [
    "Mini (up to 110cc)",
    "Economy (110-125cc)",
    "Medium (126-160cc)",
    "Maxi (161cc-350cc)",
  ];
  const locations = [
    "phuket",
    "pattaya",
    "bangkok",
    "samui",
    "krabi",
    "hua-hin",
    "koh-Phangan-Island",
  ];
  const brands = {
    car: ["Toyota", "Honda", "Ford", "Mazda", "Nissan", "BMW", "Mercedes"],
    motorcycle: ["Honda", "Yamaha", "Suzuki", "Kawasaki", "GPX"],
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
    if (!loading && userType !== "owner") {
      navigate("/dashboard");
    }
  }, [user, loading, navigate, userType]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();

      // Добавляем текстовые данные
      for (const key in formData) {
        if (formData[key as keyof VehicleFormData] !== undefined) {
          formDataToSend.append(
            key,
            String(formData[key as keyof VehicleFormData])
          );
        }
      }

      // Добавляем изображения
      images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      const response = await axios.post("/api/cars", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setSuccessMessage("Транспортное средство успешно добавлено!");
      // Очищаем форму после успешной отправки
      setFormData({
        name: "",
        type: "",
        vehicleType: "car",
        brand: "",
        model: "",
        year: "",
        price: "",
        description: "",
        location: "",
        transmission: "automatic",
        fuelType: "gasoline",
        category: "",
      });
      setImages([]);
    } catch (error) {
      console.error("Ошибка при создании транспортного средства:", error);
      setErrorMessage(
        "Произошла ошибка при создании транспортного средства. Пожалуйста, попробуйте снова."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Wroomo</h1>
        <nav className="dashboard-nav">
          <a href="#">Найти транспорт</a>
          <a href="#">Места</a>
          <a href="#">Новости</a>
          <a href="#">Блог</a>
          <a href="#">О нас</a>
          <button
            style={{
              marginLeft: "20px",
              padding: "6px 12px",
              cursor: "pointer",
              backgroundColor: "#e74c3c",
              border: "none",
              borderRadius: "4px",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={logout}
          >
            Выход
          </button>
        </nav>
      </header>

      <div className="vehicle-creation-container">
        <h2>Добавить новое транспортное средство</h2>

        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-error">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="vehicle-form">
          <div className="form-section">
            <h3>Основная информация</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Тип транспорта *</label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                >
                  <option value="car">Автомобиль</option>
                  <option value="motorcycle">Мотоцикл</option>
                </select>
              </div>

              <div className="form-group">
                <label>Название *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Марка *</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите марку</option>
                  {brands[formData.vehicleType].map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Модель *</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Год выпуска *</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  required
                />
              </div>

              <div className="form-group">
                <label>Цена за день ($) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Категория *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите категорию</option>
                  {(formData.vehicleType === "car"
                    ? carCategories
                    : motorcycleCategories
                  ).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Местоположение *</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите местоположение</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Технические характеристики</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Трансмиссия *</label>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  required
                >
                  <option value="automatic">Автоматическая</option>
                  <option value="manual">Механическая</option>
                </select>
              </div>

              <div className="form-group">
                <label>Тип топлива *</label>
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  required
                >
                  <option value="gasoline">Бензин</option>
                  <option value="diesel">Дизель</option>
                  <option value="electric">Электрический</option>
                  <option value="hybrid">Гибрид</option>
                </select>
              </div>
            </div>

            {formData.vehicleType === "car" && (
              <div className="form-row">
                <div className="form-group">
                  <label>Количество мест *</label>
                  <input
                    type="number"
                    name="seats"
                    value={formData.seats || ""}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Количество дверей *</label>
                  <input
                    type="number"
                    name="doors"
                    value={formData.doors || ""}
                    onChange={handleChange}
                    min="1"
                    max="6"
                    required
                  />
                </div>
              </div>
            )}

            {formData.vehicleType === "motorcycle" && (
              <div className="form-row">
                <div className="form-group">
                  <label>Объем двигателя (cc) *</label>
                  <input
                    type="number"
                    name="engineSize"
                    value={formData.engineSize || ""}
                    onChange={handleChange}
                    min="50"
                    max="3000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Тип двигателя *</label>
                  <input
                    type="text"
                    name="engineType"
                    value={formData.engineType || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            {formData.vehicleType === "car" && (
              <div className="form-row">
                <div className="form-group">
                  <label>Объем багажника</label>
                  <select
                    name="trunkCapacity"
                    value={formData.trunkCapacity || ""}
                    onChange={handleChange}
                  >
                    <option value="small">Маленький</option>
                    <option value="medium">Средний</option>
                    <option value="large">Большой</option>
                    <option value="extra-large">Очень большой</option>
                  </select>
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    name="airConditioned"
                    id="airConditioned"
                    checked={formData.airConditioned || false}
                    onChange={handleChange}
                  />
                  <label htmlFor="airConditioned">Кондиционер</label>
                </div>
              </div>
            )}
          </div>

          <div className="form-section">
            <h3>Описание и изображения</h3>
            <div className="form-group">
              <label>Описание *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div className="form-group">
              <label>Изображения * (минимум 1, максимум 5)</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {images.length > 0 && (
                <div className="image-preview">
                  <p>Выбранные изображения: {images.length}</p>
                  <div className="preview-grid">
                    {images.map((image, index) => (
                      <div key={index} className="preview-item">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Сохранение..." : "Добавить транспорт"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleCreationPage;
