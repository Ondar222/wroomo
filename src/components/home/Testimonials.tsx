import React from "react";
import { Star, Quote } from "lucide-react";
import "../../styles/Testimonials.css";

interface TestimonialProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Алексей Долгов",
    location: "Россия",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "Мотоцикл, который я взял напрокат, был в идеальном состоянии, и знакомство с островом Самуи доставило мне массу удовольствия! Сервис был отличным, а цена приемлемой.",
    date: "Апрель 2025",
  },
  {
    name: "Эмма Уиллиамс",
    location: "Сша",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.5,
    text: "Арендовать автомобиль через Rent Ride было так просто. Процесс получения прошел гладко, и автомобиль был в точности таким, как описано в описании. Обязательно воспользуюсь им еще раз!",
    date: "Март 2025",
  },
  {
    name: "Марк Томсон",
    location: "Бангкок",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "Отличный опыт аренды скутера на Пхукете! Владелец был дружелюбен и дал полезные советы об окрестностях. Скутер был надежным и экономичным..",
    date: "Февраль 2025",
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  location,
  image,
  rating,
  text,
  date,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar-container">
          <img src={image} alt={name} className="testimonial-avatar" />
        </div>
        <div className="testimonial-user-info">
          <h4 className="testimonial-name">{name}</h4>
          <div className="testimonial-location-date">
            <span className="testimonial-location">{location}</span>
            <span className="testimonial-date">{date}</span>
          </div>
          <div className="testimonial-rating">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`testimonial-star ${
                    i < Math.floor(rating)
                      ? "testimonial-star-filled"
                      : i < rating
                      ? "testimonial-star-half-filled"
                      : "testimonial-star-empty"
                  }`}
                />
              ))}
          </div>
        </div>
        <Quote className="testimonial-quote-icon" size={24} />
      </div>
      <p className="testimonial-text">{text}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Что говорят наши клиенты</h2>
          <p className="testimonials-subtitle">
            Не верьте нам на слово. Вот что думают путешественники, которые
            воспользовались нашим сервисом.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="testimonials-footer">
          <button className="testimonials-view-all-button">
            Просмотреть все отзывы
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
