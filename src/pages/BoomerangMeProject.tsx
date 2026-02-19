import React from 'react';

const boomerangMeVideos = [
  { id: "o-0qIWqJmio", title: "Как работает программа лояльности BoomerangMe", url: "https://youtu.be/o-0qIWqJmio" },
  { id: "C7vXaf0w1MA", title: "BoomerangMe Cards - Преимущества для бизнеса", url: "https://youtu.be/C7vXaf0w1MA" },
  { id: "RD9JC18USLc", title: "Цифровые карты лояльности BoomerangMe", url: "https://youtu.be/RD9JC18USLc" },
  { id: "V1Fi_uMdUws", title: "BoomerangMe - Увеличение продаж через лояльность", url: "https://youtu.be/V1Fi_uMdUws" },
  { id: "YRNDSTig70Y", title: "Как настроить программу лояльности в BoomerangMe", url: "https://youtu.be/YRNDSTig70Y" },
  { id: "awS5dHt63QQ", title: "BoomerangMe Cards - Аналитика и отчеты", url: "https://youtu.be/awS5dHt63QQ" },
  { id: "C0EiU_3zaGU", title: "Интеграция BoomerangMe с кассовыми системами", url: "https://youtu.be/C0EiU_3zaGU" },
  { id: "b7CmWBOGoLg", title: "BoomerangMe - Мобильное приложение для клиентов", url: "https://youtu.be/b7CmWBOGoLg" },
  { id: "FjSTHOUa8fY", title: "Персонализация предложений в BoomerangMe", url: "https://youtu.be/FjSTHOUa8fY" },
  { id: "EX8ExSFbaz4", title: "BoomerangMe Cards - SMS и Push уведомления", url: "https://youtu.be/EX8ExSFbaz4" },
  { id: "yEqw2atpvZw", title: "Геймификация в программе лояльности BoomerangMe", url: "https://youtu.be/yEqw2atpvZw" },
  { id: "vfrkR8g8OjM", title: "BoomerangMe - Управление акциями и скидками", url: "https://youtu.be/vfrkR8g8OjM" },
  { id: "TnT-Go9asuI", title: "Сегментация клиентов в BoomerangMe Cards", url: "https://youtu.be/TnT-Go9asuI" },
  { id: "pO9sb-bm_L8", title: "BoomerangMe - Автоматизация маркетинга", url: "https://youtu.be/pO9sb-bm_L8" },
  { id: "OgeSlMQvL5I", title: "Реферальная программа в BoomerangMe Cards", url: "https://youtu.be/OgeSlMQvL5I" },
  { id: "ex0osRYJrNM", title: "BoomerangMe - Интеграция с социальными сетями", url: "https://youtu.be/ex0osRYJrNM" },
  { id: "Id4NfWAEYKg", title: "Многоуровневая программа лояльности BoomerangMe", url: "https://youtu.be/Id4NfWAEYKg" }
];

export function BoomerangMeProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">BoomerangMe Cards</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "BoomerangMe Cards" потребовал создания динамичного и визуально привлекательного контента на основе формата "говорящая голова". 
            Для повышения вовлеченности зрителей была проведена работа по дополнению основных кадров релевантными изображениями из интернета и анимационными элементами, 
            которые усиливают смысловую нагрузку и подчеркивают ключевые моменты повествования. В результате получился живой и интересный для просмотра видеоролик, 
            удерживающий внимание аудитории на протяжении всего контента.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boomerangMeVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="relative pt-[56.25%]">
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