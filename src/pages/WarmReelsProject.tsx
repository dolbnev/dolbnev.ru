import React from 'react';

const warmReelsVideos = [
  { id: "warm-1", title: "Warm Reels | Отопительное оборудование", url: "https://www.instagram.com/reel/C4dq_ZfNqCp/?igsh=anpoZmc1bXpoZXkw" },
  { id: "warm-2", title: "Warm Reels | Современные технологии", url: "https://www.instagram.com/reel/C4pnIc6NNMo/?igsh=NmM3N3M4dXFkcnYz" },
  { id: "warm-3", title: "Warm Reels | Качественное оборудование", url: "https://www.instagram.com/reel/C4ueUDSNvWW/?igsh=ZGdtYWt0NWlpMjY2" },
  { id: "warm-4", title: "Warm Reels | Инновационные решения", url: "https://www.instagram.com/reel/C407N3ntiOf/?igsh=bWU4cWVheDF1dGk5" },
  { id: "warm-5", title: "Warm Reels | Эффективное отопление", url: "https://www.instagram.com/reel/C48Q7RwtPHM/?igsh=bm4xdDRzemJyanR0" }
];

export function WarmReelsProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Warm Reels</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "Warm" для производителя современного отопительного оборудования включал создание информативного и 
            визуально привлекательного контента о продукции компании. В работу входила нарезка материала с добавлением 
            субтитров для лучшего восприятия технической информации и плавных переходов между сценами. Результатом стали 
            динамичные ролики, эффективно демонстрирующие преимущества и особенности отопительного оборудования в 
            доступном для аудитории формате.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warmReelsVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="relative pt-[177.78%] bg-gray-200 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-gray-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-sm">Instagram Reel</p>
                  </div>
                </div>
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