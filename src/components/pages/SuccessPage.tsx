import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../styles/SuccessPage.css";

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("paymentId");

  return (
    <div className="success-page">
      <h1>Спасибо за оплату!</h1>
      <p>Ваш заказ успешно оплачен.</p>
      {paymentId && <p>Номер платежа: {paymentId}</p>}
      <button onClick={() => (window.location.href = "/")}>
        Вернуться на главную
      </button>
    </div>
  );
};

export default SuccessPage;
