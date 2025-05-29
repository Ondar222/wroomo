import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../styles/PaymentPage.css";

const PaymentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const userId = searchParams.get("userId");
  const amount = searchParams.get("amount");
  const [error, setError] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(true);

  const handlePayment = async () => {
    try {
      if (!orderId || !userId || !amount) {
        throw new Error("Отсутствуют параметры");
      }

      const numericAmount = parseFloat(amount);
      if (isNaN(numericAmount) || numericAmount <= 0) {
        throw new Error("Неверная сумма");
      }

      const res = await fetch("http://5.35.28.88:4001/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          value: numericAmount.toFixed(2),
          orderId,
          userId,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Ошибка при создании платежа");
      }

      const data = await res.json();
      const redirectUrl = data?.payment?.confirmation?.confirmation_url;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        throw new Error("Не получен URL подтверждения");
      }
    } catch (error) {
      console.error("Ошибка оплаты:", error);
      setError(error instanceof Error ? error.message : "Ошибка");
      setIsProcessing(false);
    }
  };

  React.useEffect(() => {
    if (orderId && userId && amount) {
      handlePayment();
    } else {
      setError("Не все параметры указаны");
      setIsProcessing(false);
    }
  }, [orderId, userId, amount]);

  return (
    <div className="payment-page">
      <h1>Переход к оплате...</h1>
      <p>Заказ: {orderId}</p>
      <p>Сумма: {amount} ₽</p>

      {isProcessing ? (
        <div className="loader"></div>
      ) : (
        <div className="error-message">
          <p>Ошибка: {error}</p>
          <button onClick={() => window.location.reload()}>
            Попробовать снова
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
