import React, { useState } from "react";
import { Send } from "lucide-react";
import "../../styles/Newsletter.css"; // We'll create this CSS file

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Будьте в курсе событий</h2>
          <p className="newsletter-description">
            Подпишитесь на нашу рассылку новостей, чтобы получать эксклюзивные
            предложения, советы путешественникам и уведомления о новых
            транспортных средствах.
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш адрес электронной почты"
                className="newsletter-input"
                required
              />
            </div>
            <button type="submit" className="newsletter-button">
              Подписаться
              <Send size={16} className="newsletter-icon" />
            </button>
          </form>

          {isSubmitted && (
            <div className="newsletter-success">Спасибо за подписку!</div>
          )}

          <p className="newsletter-disclaimer">
            Подписываясь, вы соглашаетесь с нашей политикой конфиденциальности и
            даете согласие на получение обновлений от нашей компании.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
