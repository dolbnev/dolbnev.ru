import React from 'react';

const hanTikTokVideos = [
  { id: "han-1", title: "Han TikTok | Спортивная одежда", url: "https://vt.tiktok.com/ZSAPFTH7d/" },
  { id: "han-2", title: "Han TikTok | Брендовая коллекция", url: "https://vt.tiktok.com/ZSAPY1nva/" },
  { id: "han-3", title: "Han TikTok | Стильные решения", url: "https://vt.tiktok.com/ZSAPF78Ho/" }
];

export function HanTikTokProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Han TikTok</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "Han" представлял собой полный цикл монтажа контента, адаптированного специально для платформы TikTok. 
            В работе применялась динамичная подача материала для максимального удержания внимания аудитории. 
            Особое внимание уделялось саунд-дизайну, который акцентировал ключевые моменты сторителлинга и усиливал 
            эмоциональное воздействие контента, не забирая на себя все внимание.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hanTikTokVideos.map((video) => (
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
                    <p className="text-sm">TikTok Video</p>
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