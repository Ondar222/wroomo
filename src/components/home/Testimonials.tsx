import React from "react";
import { Star, Quote } from "lucide-react";

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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">{location}</span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <div className="flex items-center mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(rating)
                      ? "text-yellow-500 fill-current"
                      : i < rating
                      ? "text-yellow-500 fill-current opacity-50"
                      : "text-gray-300"
                  }`}
                />
              ))}
          </div>
        </div>
        <Quote size={24} className="ml-auto text-primary-200" />
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Что говорят наши клиенты
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Не верьте нам на слово. Вот что думают путешественники, которые
            воспользовались нашим сервисом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-md transition-colors font-medium">
            Просмотреть все отзывы
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
