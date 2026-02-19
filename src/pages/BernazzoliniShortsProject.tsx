import React from 'react';

const bernazzoliniShortsVideos = [
  { id: "W7F_WOmiJcc", title: "Bernazzolini | Дизайн интерьеров", url: "https://youtube.com/shorts/W7F_WOmiJcc" },
  { id: "srGc9eOEPGw", title: "Bernazzolini | Мебельное производство", url: "https://youtube.com/shorts/srGc9eOEPGw" },
  { id: "YjP7zLMQu7k", title: "Bernazzolini | Кухонные решения", url: "https://youtube.com/shorts/YjP7zLMQu7k" },
  { id: "mZmZ_O6KfCo", title: "Bernazzolini | Дизайнерские идеи", url: "https://youtube.com/shorts/mZmZ_O6KfCo" },
  { id: "o_p9IJA0oJQ", title: "Bernazzolini | Качественные материалы", url: "https://youtube.com/shorts/o_p9IJA0oJQ" },
  { id: "KCtFkfbo408", title: "Bernazzolini | Индивидуальный подход", url: "https://youtube.com/shorts/KCtFkfbo408" },
  { id: "RYxmC_uPRSM", title: "Bernazzolini | Современный стиль", url: "https://youtube.com/shorts/RYxmC_uPRSM" },
  { id: "zcM5lu33NME", title: "Bernazzolini | Функциональность", url: "https://youtube.com/shorts/zcM5lu33NME" },
  { id: "vAZHfeGDDso", title: "Bernazzolini | Эргономика", url: "https://youtube.com/shorts/vAZHfeGDDso" },
  { id: "xa-CXmaTSBQ", title: "Bernazzolini | Премиум качество", url: "https://youtube.com/shorts/xa-CXmaTSBQ" },
  { id: "vubElGx95LY", title: "Bernazzolini | Инновации", url: "https://youtube.com/shorts/vubElGx95LY" },
  { id: "d4CvMxHd11E", title: "Bernazzolini | Технологии", url: "https://youtube.com/shorts/d4CvMxHd11E" },
  { id: "CqnVjZDSdtA", title: "Bernazzolini | Мастерство", url: "https://youtube.com/shorts/CqnVjZDSdtA" },
  { id: "s_9oEEOtqjU", title: "Bernazzolini | Детали", url: "https://youtube.com/shorts/s_9oEEOtqjU" },
  { id: "VR2cfig--c8", title: "Bernazzolini | Элегантность", url: "https://youtube.com/shorts/VR2cfig--c8" },
  { id: "ahreTn_HvwE", title: "Bernazzolini | Стиль жизни", url: "https://youtube.com/shorts/ahreTn_HvwE" },
  { id: "_gBgJXI2vRE", title: "Bernazzolini | Комфорт", url: "https://youtube.com/shorts/_gBgJXI2vRE" },
  { id: "r7F1exPelCA", title: "Bernazzolini | Уют", url: "https://youtube.com/shorts/r7F1exPelCA" },
  { id: "abjm7km8ho4", title: "Bernazzolini | Практичность", url: "https://youtube.com/shorts/abjm7km8ho4" },
  { id: "85kbJq7GgQE", title: "Bernazzolini | Долговечность", url: "https://youtube.com/shorts/85kbJq7GgQE" },
  { id: "obEtlmgF5Jc", title: "Bernazzolini | Надежность", url: "https://youtube.com/shorts/obEtlmgF5Jc" },
  { id: "QPwcsPs0bkQ", title: "Bernazzolini | Безопасность", url: "https://youtube.com/shorts/QPwcsPs0bkQ" },
  { id: "1iSqLui9b3A", title: "Bernazzolini | Экологичность", url: "https://youtube.com/shorts/1iSqLui9b3A" },
  { id: "jEyyicOulYA", title: "Bernazzolini | Устойчивость", url: "https://youtube.com/shorts/jEyyicOulYA" },
  { id: "Qy0nqmGYcMg", title: "Bernazzolini | Гарантия", url: "https://youtube.com/shorts/Qy0nqmGYcMg" },
  { id: "cEnScqqaDBs", title: "Bernazzolini | Сервис", url: "https://youtube.com/shorts/cEnScqqaDBs" },
  { id: "cRYlF37VPoc", title: "Bernazzolini | Поддержка", url: "https://youtube.com/shorts/cRYlF37VPoc" },
  { id: "ATpSZlXoWAo", title: "Bernazzolini | Консультации", url: "https://youtube.com/shorts/ATpSZlXoWAo" },
  { id: "Fg5Q-nmXtzQ", title: "Bernazzolini | Планирование", url: "https://youtube.com/shorts/Fg5Q-nmXtzQ" },
  { id: "xVIexm6y7yo", title: "Bernazzolini | Проектирование", url: "https://youtube.com/shorts/xVIexm6y7yo" },
  { id: "XZu3HpuW1SY", title: "Bernazzolini | Визуализация", url: "https://youtube.com/shorts/XZu3HpuW1SY" },
  { id: "h9xIGxMbE7o", title: "Bernazzolini | 3D модели", url: "https://youtube.com/shorts/h9xIGxMbE7o" },
  { id: "Gykp7nbZMP8", title: "Bernazzolini | Чертежи", url: "https://youtube.com/shorts/Gykp7nbZMP8" },
  { id: "HOX-XE-JwYg", title: "Bernazzolini | Размеры", url: "https://youtube.com/shorts/HOX-XE-JwYg" },
  { id: "nh92JMBvWZ4", title: "Bernazzolini | Установка", url: "https://youtube.com/shorts/nh92JMBvWZ4" },
  { id: "pDj7Wop5Q4w", title: "Bernazzolini | Монтаж", url: "https://youtube.com/shorts/pDj7Wop5Q4w" },
  { id: "mjzzHUDJYVY", title: "Bernazzolini | Доставка", url: "https://youtube.com/shorts/mjzzHUDJYVY" },
  { id: "4hLhTtWHE14", title: "Bernazzolini | Логистика", url: "https://youtube.com/shorts/4hLhTtWHE14" },
  { id: "o0xseD94o84", title: "Bernazzolini | Упаковка", url: "https://youtube.com/shorts/o0xseD94o84" },
  { id: "bjYhj2R51I4", title: "Bernazzolini | Транспортировка", url: "https://youtube.com/shorts/bjYhj2R51I4" },
  { id: "1gLdCZlFyts", title: "Bernazzolini | Склад", url: "https://youtube.com/shorts/1gLdCZlFyts" },
  { id: "KkUiqt8dESQ", title: "Bernazzolini | Производство", url: "https://youtube.com/shorts/KkUiqt8dESQ" },
  { id: "-uMRCzWqzYc", title: "Bernazzolini | Цех", url: "https://youtube.com/shorts/-uMRCzWqzYc" },
  { id: "UiCIprt9uxc", title: "Bernazzolini | Оборудование", url: "https://youtube.com/shorts/UiCIprt9uxc" },
  { id: "3ClGWowTQVI", title: "Bernazzolini | Станки", url: "https://youtube.com/shorts/3ClGWowTQVI" },
  { id: "_2S9002gEpQ", title: "Bernazzolini | Инструменты", url: "https://youtube.com/shorts/_2S9002gEpQ" },
  { id: "IbTM-prFPZ4", title: "Bernazzolini | Обработка", url: "https://youtube.com/shorts/IbTM-prFPZ4" },
  { id: "ZkVxFo61sKA", title: "Bernazzolini | Шлифовка", url: "https://youtube.com/shorts/ZkVxFo61sKA" },
  { id: "yg7e63ZaD-o", title: "Bernazzolini | Покраска", url: "https://youtube.com/shorts/yg7e63ZaD-o" },
  { id: "ZWHSt7BeYfM", title: "Bernazzolini | Лакировка", url: "https://youtube.com/shorts/ZWHSt7BeYfM" },
  { id: "Yet-LaqhP3U", title: "Bernazzolini | Финишная обработка", url: "https://youtube.com/shorts/Yet-LaqhP3U" },
  { id: "n5yC6blSGNk", title: "Bernazzolini | Контроль качества", url: "https://youtube.com/shorts/n5yC6blSGNk" },
  { id: "GhCWY1khDL0", title: "Bernazzolini | Готовая продукция", url: "https://youtube.com/shorts/GhCWY1khDL0" }
];

export function BernazzoliniShortsProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Bernazzolini Shorts</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "Bernazzolini" был направлен на максимальное удержание внимания аудитории и повышение охватов контента в сфере дизайна интерьеров. 
            В рамках сервиса была выполнена самостоятельная нарезка наиболее ярких моментов из исходного материала и их адаптация в формат коротких видео. 
            Дополнительно осуществлялся монтаж полноформатных видеороликов, демонстрирующих процесс создания мебели и дизайнерские решения, 
            которые представлены в разделе горизонтальных видео портфолио.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bernazzoliniShortsVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="relative pt-[177.78%]">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}