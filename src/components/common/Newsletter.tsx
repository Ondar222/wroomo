import React, { useState } from "react";
import { Send } from "lucide-react";

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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Будьте в курсе событий
          </h2>
          <p className="text-gray-600 mb-8 text-left">
            Подпишитесь на нашу рассылку новостей, чтобы получать эксклюзивные
            предложения, советы путешественникам и уведомления о новых
            транспортных средствах.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш адрес электронной почты"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              Подписаться
              <Send size={16} className="ml-2" />
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-green-600 animate-fade-in">
              Спасибо за подписку!
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4 text-left">
            Подписываясь, вы соглашаетесь с нашей политикой конфиденциальности и
            даете согласие на получение обновлений от нашей компании.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
