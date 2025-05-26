import { Route, Routes } from "react-router-dom";
import App from "../../App";
import VehicleDetailPage from "../../components/pages/VehicleDetailPage";
import NotFoundPage from "../../components/pages/NotFoundPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/vehicle/:id" element={<VehicleDetailPage />} />{" "}
    {/* Добавил параметр :id */}
    <Route path="*" element={<NotFoundPage />} />{" "}
    {/* Ловим все несуществующие маршруты */}
  </Routes>
);

export default Router;
