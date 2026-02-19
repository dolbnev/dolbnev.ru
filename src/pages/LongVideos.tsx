import React from 'react';
import { Link } from 'react-router-dom';

export function LongVideos() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-20 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-druk text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 tracking-tight">Горизонтальные видео</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <Link 
              to="/portfolio/long-videos/boomerangme"
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 p-6 sm:p-8 min-h-[6rem] sm:min-h-[8rem] flex flex-col justify-center"
            >
              <h2 className="font-druk text-xl sm:text-2xl font-bold mb-2 tracking-tight">BoomerangMe Cards</h2>
              <p className="text-gray-600 text-sm sm:text-base">Платформа лояльности для малого и среднего бизнеса, разработанная для агентств</p>
            </Link>
            
            <Link 
              to="/portfolio/long-videos/bernazzolini"
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 p-6 sm:p-8 min-h-[6rem] sm:min-h-[8rem] flex flex-col justify-center"
            >
             <h2 className="font-druk text-xl sm:text-2xl font-bold mb-2 tracking-tight">Bernazzolini</h2>
              <p className="text-gray-600 text-sm sm:text-base">Кухни и мебель по дизайн проектам</p>
            </Link>
          
            <Link 
              to="/portfolio/long-videos/spasibo-pap"
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 p-6 sm:p-8 min-h-[6rem] sm:min-h-[8rem] flex flex-col justify-center"
            >
             <h2 className="font-druk text-xl sm:text-2xl font-bold mb-2 tracking-tight">Спасибо, Пап!</h2>
              <p className="text-gray-600 text-sm sm:text-base">Всё о воспитании счастливых детей</p>
            </Link>
            
            <Link 
              to="/portfolio/long-videos/andrey-voronov"
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 p-6 sm:p-8 min-h-[6rem] sm:min-h-[8rem] flex flex-col justify-center"
            >
             <h2 className="font-druk text-xl sm:text-2xl font-bold mb-2 tracking-tight">Андрей Воронов-Оренбургский</h2>
              <p className="text-gray-600 text-sm sm:text-base">Писатель</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}