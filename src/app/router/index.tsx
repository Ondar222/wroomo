import { Route, Routes } from "react-router-dom";
import App from "../../App";
import VehicleDetailPage from "../../components/pages/VehicleDetailPage";
import NotFoundPage from "../../components/pages/NotFoundPage";
import MotorcycleDetailPage from "../../components/pages/moto/MotorcycleDetailPage";
import CarsPage from "../../components/pages/cars/CarsPage";
import CarDetailPage from "../../components/pages/cars/CarDetailPage";
import MotorcyclesPage from "../../components/pages/moto/MotorcyclesPage";
import LoginPage from "../../components/pages/LoginPage";
import RegisterPage from "../../components/pages/register/RegisterPage";
import RegisterTypePage from "../../components/pages/register/RegisterTypePage";
import LocationsPage from "../../components/pages/LocationPage";
import DashboardPage from "../../components/pages/admin/DashboardPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<App />} />

    {/* /авторизация */}
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/register/type" element={<RegisterTypePage />} />
    <Route path="/dashboard" element={<DashboardPage />} />

    {/* Страницы мотоциклов */}
    <Route path="/moto" element={<MotorcyclesPage />} />
    <Route path="/moto/:id" element={<MotorcycleDetailPage />} />

    {/* Страницы автомобилей */}
    <Route path="/cars" element={<CarsPage />} />
    <Route path="/cars/:id" element={<CarDetailPage />} />

    {/* Общий маршрут для детальной страницы транспортного средства (если нужно) */}
    <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
    <Route path="/motorcycles/:id" element={<MotorcycleDetailPage />} />

    <Route path="/locations/:slug?" element={<LocationsPage />} />

    {/* Ловим все несуществующие маршруты */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default Router;
