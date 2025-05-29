import React, { useState } from "react";
import api from "../../api/api";

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    vehicleType: "car",
    brand: "",
    model: "",
    year: "",
    price: "",
    description: "",
    // добавь другие поля, если нужно
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      for (const key in formData) {
        data.append(key, formData[key]);
      }

      images.forEach((image) => {
        data.append("images", image);
      });

      const response = await api.post("/vehicles", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Vehicle created successfully!");
      // Очистка формы, например:
      setFormData({
        name: "",
        type: "",
        vehicleType: "car",
        brand: "",
        model: "",
        year: "",
        price: "",
        description: "",
      });
      setImages([]);
    } catch (error) {
      console.error("Error creating vehicle:", error);
      alert("Error creating vehicle");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Vehicle Type:</label>
        <select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
        >
          <option value="car">Car</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
      </div>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Model:</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Year:</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Images:</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Vehicle"}
      </button>
    </form>
  );
};

export default VehicleForm;
