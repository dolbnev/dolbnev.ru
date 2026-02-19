import React from 'react';

const bernazzoliniVideos = [
  { id: "ApCcFnnxZNo", title: "Bernazzolini | Кухни и мебель по дизайн проектам", url: "https://youtu.be/ApCcFnnxZNo" },
  { id: "VDETNGXSFSs", title: "Bernazzolini | Производство мебели", url: "https://youtu.be/VDETNGXSFSs" },
  { id: "G6mG0BzWLyg", title: "Bernazzolini | Дизайн проекты", url: "https://youtu.be/G6mG0BzWLyg" },
  { id: "aLCkVZTZ6Oc", title: "Bernazzolini | Качественные материалы", url: "https://youtu.be/aLCkVZTZ6Oc" },
  { id: "vWACzuNAx8k", title: "Bernazzolini | Индивидуальный дизайн", url: "https://youtu.be/vWACzuNAx8k" },
  { id: "ysrOjdBIGN4", title: "Bernazzolini | Контроль качества", url: "https://youtu.be/ysrOjdBIGN4" },
  { id: "Qxv0Oc5iHAA", title: "Bernazzolini | Дизайнерские решения", url: "https://youtu.be/Qxv0Oc5iHAA" },
  { id: "AASE8ggvaXo", title: "Bernazzolini | Уникальность проектов", url: "https://youtu.be/AASE8ggvaXo" },
  { id: "QlchZA48XjY", title: "Bernazzolini | Стильные решения", url: "https://youtu.be/QlchZA48XjY" },
  { id: "3avCkxBL880", title: "Bernazzolini | Внимание к деталям", url: "https://youtu.be/3avCkxBL880" },
  { id: "DzPkVVUtGKI", title: "Bernazzolini | Производственный процесс", url: "https://youtu.be/DzPkVVUtGKI" },
  { id: "JoTZkMqPx4M", title: "Bernazzolini | Мастерство исполнения", url: "https://youtu.be/JoTZkMqPx4M" },
  { id: "tet0-4SbiVE", title: "Bernazzolini | Элегантные решения", url: "https://youtu.be/tet0-4SbiVE" },
  { id: "NRK4jks-LnY", title: "Bernazzolini | Комфорт и функциональность", url: "https://youtu.be/NRK4jks-LnY" },
  { id: "WGHHHAEVr80", title: "Bernazzolini | Инновационные технологии", url: "https://youtu.be/WGHHHAEVr80" },
  { id: "08F7h7Ojitk", title: "Bernazzolini | Функциональные решения", url: "https://youtu.be/08F7h7Ojitk" },
  { id: "4YEo14Sdnq8", title: "Bernazzolini | Эргономичный дизайн", url: "https://youtu.be/4YEo14Sdnq8" },
  { id: "R9QtjFA01fc", title: "Bernazzolini | Интерьерные решения", url: "https://youtu.be/R9QtjFA01fc" },
  { id: "C3TSmwWSIuw", title: "Bernazzolini | Планировка пространства", url: "https://youtu.be/C3TSmwWSIuw" },
  { id: "WqK0J183BQE", title: "Bernazzolini | Реализация проектов", url: "https://youtu.be/WqK0J183BQE" },
  { id: "58w5gEf4_qM", title: "Bernazzolini | Финальный результат", url: "https://youtu.be/58w5gEf4_qM" }
];

export function BernazzoliniProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Bernazzolini | Кухни и мебель по дизайн проектам</h1>
          <p className="text-xl text-gray-600">
            На данном проекте была разработана концепция и общая стилистика монтажа. 
            Создана серия видеороликов, демонстрирующих различные аспекты производства и дизайна мебели.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bernazzoliniVideos.map((video) => (
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