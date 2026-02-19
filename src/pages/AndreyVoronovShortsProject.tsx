import React from 'react';

const andreyVoronovShortsVideos = [
  { id: "qPLG0MvAxN0", title: "Андрей Воронов-Оренбургский | Творческий процесс", url: "https://youtube.com/shorts/qPLG0MvAxN0" },
  { id: "qTrT2PnQ01o", title: "Андрей Воронов-Оренбургский | О литературе", url: "https://youtube.com/shorts/qTrT2PnQ01o" },
  { id: "WCI-zfkHJUs", title: "Андрей Воронов-Оренбургский | Писательский опыт", url: "https://youtube.com/shorts/WCI-zfkHJUs" },
  { id: "7J7_kZyEp9o", title: "Андрей Воронов-Оренбургский | Вдохновение", url: "https://youtube.com/shorts/7J7_kZyEp9o" },
  { id: "kSaQzORhJvg", title: "Андрей Воронов-Оренбургский | Творческие идеи", url: "https://youtube.com/shorts/kSaQzORhJvg" },
  { id: "63Rued0JHyg", title: "Андрей Воронов-Оренбургский | Литературные произведения", url: "https://youtube.com/shorts/63Rued0JHyg" },
  { id: "K2avZLBb8Uc", title: "Андрей Воронов-Оренбургский | Писательское мастерство", url: "https://youtube.com/shorts/K2avZLBb8Uc" },
  { id: "rXaWqck2N6A", title: "Андрей Воронов-Оренбургский | Творческая философия", url: "https://youtube.com/shorts/rXaWqck2N6A" },
  { id: "mYS5yZ8DxiQ", title: "Андрей Воронов-Оренбургский | Литературный мир", url: "https://youtube.com/shorts/mYS5yZ8DxiQ" },
  { id: "7QZiVE4pJic", title: "Андрей Воронов-Оренбургский | Авторский стиль", url: "https://youtube.com/shorts/7QZiVE4pJic" },
  { id: "fJCXCKw1G_s", title: "Андрей Воронов-Оренбургский | Творческое наследие", url: "https://youtube.com/shorts/fJCXCKw1G_s" },
  { id: "OUZk5bT5MyY", title: "Андрей Воронов-Оренбургский | Литературная критика", url: "https://youtube.com/shorts/OUZk5bT5MyY" },
  { id: "VpXgiQXf944", title: "Андрей Воронов-Оренбургский | Писательские секреты", url: "https://youtube.com/shorts/VpXgiQXf944" },
  { id: "FhrCdUj6rgs", title: "Андрей Воронов-Оренбургский | Творческий путь", url: "https://youtube.com/shorts/FhrCdUj6rgs" },
  { id: "2bN4Cp86hzw", title: "Андрей Воронов-Оренбургский | Литературные жанры", url: "https://youtube.com/shorts/2bN4Cp86hzw" },
  { id: "_0jN0IxdKxU", title: "Андрей Воронов-Оренбургский | Авторские методы", url: "https://youtube.com/shorts/_0jN0IxdKxU" },
  { id: "9UztOQ0UkLw", title: "Андрей Воронов-Оренбургский | Творческая мотивация", url: "https://youtube.com/shorts/9UztOQ0UkLw" },
  { id: "LHvNAIQZXgg", title: "Андрей Воронов-Оренбургский | Писательская практика", url: "https://youtube.com/shorts/LHvNAIQZXgg" },
  { id: "gh7lwSYJeW4", title: "Андрей Воронов-Оренбургский | Литературные образы", url: "https://youtube.com/shorts/gh7lwSYJeW4" },
  { id: "Rmy5yIGF7KY", title: "Андрей Воронов-Оренбургский | Творческое развитие", url: "https://youtube.com/shorts/Rmy5yIGF7KY" },
  { id: "NVceWbOqzyc", title: "Андрей Воронов-Оренбургский | Авторская позиция", url: "https://youtube.com/shorts/NVceWbOqzyc" },
  { id: "vuSLONK7SeA", title: "Андрей Воронов-Оренбургский | Литературное мастерство", url: "https://youtube.com/shorts/vuSLONK7SeA" },
  { id: "YQntwKzSkXE", title: "Андрей Воронов-Оренбургский | Творческое вдохновение", url: "https://youtube.com/shorts/YQntwKzSkXE" }
];

export function AndreyVoronovShortsProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Андрей Воронов-Оренбургский Shorts</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Работа с короткими видео в проекте "Андрей Воронов-Оренбургский" включала самостоятельную нарезку наиболее ярких и цепляющих 
            моментов из исходного материала с их последующей адаптацией в формат вертикальных роликов. Такой подход освободил заказчика 
            от необходимости самостоятельного выбора фрагментов для шортс, обеспечив готовый к публикации контент для социальных сетей. 
            Созданные короткие видео эффективно передают атмосферу творчества писателя и привлекают внимание к его произведениям в 
            динамичном формате. Так же доступны полноформатные ролики в разделе "горизонтальный контент".
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {andreyVoronovShortsVideos.map((video) => (
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