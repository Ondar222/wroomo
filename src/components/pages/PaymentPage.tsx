import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../styles/PaymentPage.css";

const PaymentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const userId = searchParams.get("userId");
  const amount = searchParams.get("amount");

  const handlePayment = async () => {
    try {
      const res = await fetch("http://5.35.28.88:4001/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: amount,
          orderId,
          userId,
        }),
      });

      const data = await res.json();
      if (data?.payment?.confirmation?.confirmation_url) {
        window.location.href = data.payment.confirmation.confirmation_url;
      } else {
        alert("Ошибка при создании платежа");
      }
    } catch (error) {
      console.error("Ошибка оплаты:", error);
      alert("Не удалось инициировать оплату");
    }
  };

  React.useEffect(() => {
    if (orderId && userId && amount) {
      handlePayment();
    }
  }, [orderId, userId, amount]);

  return (
    <div className="payment-page">
      <h1>Переход к оплате...</h1>
      <p>Заказ: {orderId}</p>
      <p>Сумма: {amount} $</p>
      <div className="loader"></div>
    </div>
  );
};

export default PaymentPage;
