import React, { useState, useEffect } from "react";
import axios from "axios";
// import MotorcycleCard from "./MotorcycleCard"; // импорт, если отдельно

const MotorcyclesPage: React.FC = () => {
  const [motorcycles, setMotorcycles] = useState<MotorcycleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    async function fetchMotorcycles() {
      try {
        setLoading(true);
        const response = await axios.get("/api/vehicles?vehicleType=motorcycle");
        setMotorcycles(response.data);
      } catch (err) {
        setError("Ошибка загрузки мотоциклов");
      } finally {
        setLoading(false);
      }
    }

    fetchMotorcycles();
  }, []);

  const filteredMotorcycles = motorcycles.filter((motorcycle) => {
    const matchesLocation = selectedLocation
      ? motorcycle.location === selectedLocation
      : true;
    const matchesType = selectedType ? motorcycle.type === selectedType : true;
    return matchesLocation && matchesType;
  });

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="motorcycles-page">
      {/* ...твой JSX */}
      <div className="motorcycles-grid">
        {filteredMotorcycles.length > 0 ? (
          filteredMotorcycles.map((motorcycle) => (
            <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
          ))
        ) : (
          <p className="no-results">Нет мотоциклов по заданным фильтрам.</p>
        )}
      </div>
    </div>
  );
};

export default MotorcyclesPage;
