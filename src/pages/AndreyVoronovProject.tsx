import React from 'react';

const andreyVoronovVideos = [
  { id: "Q9jm6jlGbAo", title: "Андрей Воронов-Оренбургский | Творческий процесс", url: "https://youtu.be/Q9jm6jlGbAo" },
  { id: "bRZAQmYY9jo", title: "Андрей Воронов-Оренбургский | О литературе", url: "https://youtu.be/bRZAQmYY9jo" },
  { id: "7mV5ybOiy1Q", title: "Андрей Воронов-Оренбургский | Писательский опыт", url: "https://youtu.be/7mV5ybOiy1Q" },
  { id: "Yf3CuLIgijY", title: "Андрей Воронов-Оренбургский | Вдохновение", url: "https://youtu.be/Yf3CuLIgijY" },
  { id: "Z__PaHL14r0", title: "Андрей Воронов-Оренбургский | Творческие идеи", url: "https://youtu.be/Z__PaHL14r0" },
  { id: "xRckibNRc0c", title: "Андрей Воронов-Оренбургский | Литературные произведения", url: "https://youtu.be/xRckibNRc0c" },
  { id: "2Yra-g9yFls", title: "Андрей Воронов-Оренбургский | Писательское мастерство", url: "https://youtu.be/2Yra-g9yFls" },
  { id: "r_9FvsT5IIQ", title: "Андрей Воронов-Оренбургский | Творческая философия", url: "https://youtu.be/r_9FvsT5IIQ" },
  { id: "Z69DAVegp6w", title: "Андрей Воронов-Оренбургский | Литературный мир", url: "https://youtu.be/Z69DAVegp6w" },
  { id: "eMQDJ5-PMA8", title: "Андрей Воронов-Оренбургский | Авторский стиль", url: "https://youtu.be/eMQDJ5-PMA8" }
];

export function AndreyVoronovProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Андрей Воронов-Оренбургский</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "Андрей Воронов-Оренбургский" включал комплексную постпродакшн обработку с полным циклом монтажа: цветокоррекцию, 
            базовую нарезку материала, профессиональную обработку звука и многокамерный монтаж. Особое внимание уделялось подбору 
            музыкального сопровождения, которое способствовало лучшему раскрытию личности писателя и атмосферы его произведений. 
            Дополнительно была выполнена адаптация контента в формат коротких вертикальных роликов, представленных в разделе 
            "вертикальный контент" портфолио.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {andreyVoronovVideos.map((video) => (
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