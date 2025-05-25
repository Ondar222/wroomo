import React from "react";
import { Phone, ArrowRight } from "lucide-react";

const AppDownload: React.FC = () => {
  return (
    <div className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Скачайте наше мобильное приложение
            </h2>
            <p className="text-primary-100 mb-6 max-w-lg">
              Возьмите с собой в дорогу авто напрокат. Наше мобильное приложение
              делает это еще более удобным вам будет проще находить, бронировать
              и управлять арендой автомобиля - и все это из вашего смартфона.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center space-x-3 bg-white text-primary-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-3xl">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5227 7.39601V8.92935C17.5227 9.31491 17.2064 9.6312 16.8209 9.6312C16.4353 9.6312 16.119 9.31491 16.119 8.92935V7.39601C16.119 6.39766 15.3099 5.58858 14.3116 5.58858H8.72841C7.73017 5.58858 6.92109 6.39766 6.92109 7.39601V16.6026C6.92109 17.601 7.73017 18.4101 8.72841 18.4101H14.3116C15.3099 18.4101 16.119 17.601 16.119 16.6026V15.0693C16.119 14.6837 16.4353 14.3674 16.8209 14.3674C17.2064 14.3674 17.5227 14.6837 17.5227 15.0693V16.6026C17.5227 18.3872 16.0963 19.8138 14.3116 19.8138H8.72841C6.94372 19.8138 5.51741 18.3875 5.51741 16.6026V7.39601C5.51741 5.61133 6.94372 4.18491 8.72841 4.18491H14.3116C16.0963 4.18491 17.5227 5.61133 17.5227 7.39601Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.6342 10.4121H13.8001C13.4145 10.4121 13.0981 10.7284 13.0981 11.1139C13.0981 11.4995 13.4145 11.8158 13.8001 11.8158H17.0468L13.7428 15.1198C13.4699 15.3926 13.4699 15.8337 13.7428 16.1065C13.8793 16.2428 14.058 16.311 14.2366 16.311C14.4153 16.311 14.5939 16.2428 14.7304 16.1065L18.0344 12.8025V16.0492C18.0344 16.4348 18.3507 16.7511 18.7363 16.7511C19.1218 16.7511 19.4381 16.4348 19.4381 16.0492V11.1139C19.4379 10.7284 19.1218 10.4121 19.6342 10.4121Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Если айфон:</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </button>

              <button className="flex items-center space-x-3 bg-white text-primary-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-3xl">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 10.77L19.65 8L16.6 5.23C16.54 5.17 16.5 5.09 16.5 5V4.5C16.5 4.22 16.72 4 17 4H21.5C21.78 4 22 4.22 22 4.5V11.5C22 11.78 21.78 12 21.5 12H17C16.72 12 16.5 11.78 16.5 11.5V11C16.5 10.91 16.54 10.83 16.6 10.77Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.65 9.35L12.52 6.5H4C3.45 6.5 3 6.95 3 7.5V16.5C3 17.05 3.45 17.5 4 17.5H12.52L9.65 14.65C9.45 14.45 9.45 14.15 9.65 13.95L11.45 12.15C11.65 11.95 11.95 11.95 12.15 12.15C12.35 12.35 12.35 12.65 12.15 12.85L11.3 13.7L13.52 15.9H19C19.55 15.9 20 15.45 20 14.9V9.1C20 8.55 19.55 8.1 19 8.1H13.52L11.3 10.3L12.15 11.15C12.35 11.35 12.35 11.65 12.15 11.85C11.95 12.05 11.65 12.05 11.45 11.85L9.65 10.05C9.45 9.85 9.45 9.55 9.65 9.35Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Если Android:</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-primary-900 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-primary-900 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-primary-900 object-cover"
                />
              </div>
              <div className="ml-4">
                <div className="text-primary-100 text-sm">
                  К нам присоединились более 10 000 пользователей
                </div>
                <div className="flex items-center text-sm">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="ml-1 text-primary-100">4.9/5 рейтинг</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-96">
              <div className="absolute top-0 right-0 w-full h-full bg-primary-800 rounded-xl transform rotate-6"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-primary-700 rounded-xl -rotate-3"></div>
              <div className="relative w-full h-full bg-primary-600 rounded-xl overflow-hidden flex items-center justify-center">
                <Phone size={48} className="text-primary-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;

// Star icon component
const Star = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
