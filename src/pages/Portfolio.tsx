import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Smartphone } from 'lucide-react';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-20 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-druk text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 tracking-tight">Портфолио</h1>
        
        {/* VPN Notice */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-druk text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Многие работы заказчиков опубликованы на платформах, которые работают с VPN
          </p>
        </div>
        
        {/* Категории портфолио */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          <Link 
            to="/portfolio/long-videos"
            className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 h-48 sm:h-64 group"
          >
            <Video className="w-16 h-16 text-black group-hover:text-red-600 transition-colors mb-4" />
            <h3 className="font-druk text-xl sm:text-2xl font-bold text-center tracking-tight">Горизонтальные<br />видео</h3>
          </Link>
          
          <Link 
            to="/portfolio/vertical-videos"
            className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 h-48 sm:h-64 group"
          >
            <Smartphone className="w-16 h-16 text-black group-hover:text-red-600 transition-colors mb-4" />
            <h3 className="font-druk text-xl sm:text-2xl font-bold text-center tracking-tight">Вертикальные<br />видео</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}