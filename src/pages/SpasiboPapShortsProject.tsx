import React from 'react';

const spasiboPapShortsVideos = [
  { id: "rto_qlfQKtk", title: "Спасибо, Пап! | Воспитание детей", url: "https://youtube.com/shorts/rto_qlfQKtk" },
  { id: "32Rc-1lld10", title: "Спасибо, Пап! | Семейные ценности", url: "https://youtube.com/shorts/32Rc-1lld10" },
  { id: "kGRX2j9rhjA", title: "Спасибо, Пап! | Отцовство", url: "https://youtube.com/shorts/kGRX2j9rhjA" },
  { id: "_eKsF7V0uzM", title: "Спасибо, Пап! | Родительские советы", url: "https://youtube.com/shorts/_eKsF7V0uzM" },
  { id: "f4YKqS4ug7I", title: "Спасибо, Пап! | Детская психология", url: "https://youtube.com/shorts/f4YKqS4ug7I" },
  { id: "9dCAiQf1cP8", title: "Спасибо, Пап! | Развитие ребенка", url: "https://youtube.com/shorts/9dCAiQf1cP8" },
  { id: "N6ZBwekj7BQ", title: "Спасибо, Пап! | Общение с детьми", url: "https://youtube.com/shorts/N6ZBwekj7BQ" },
  { id: "-yGP5qslGyc", title: "Спасибо, Пап! | Папины секреты", url: "https://youtube.com/shorts/-yGP5qslGyc" },
  { id: "5g0qIPfo4hY", title: "Спасибо, Пап! | Семейное время", url: "https://youtube.com/shorts/5g0qIPfo4hY" },
  { id: "-qC0WKqZ2Ws", title: "Спасибо, Пап! | Игры с детьми", url: "https://youtube.com/shorts/-qC0WKqZ2Ws" },
  { id: "YIMjRVUX8-c", title: "Спасибо, Пап! | Творческое развитие", url: "https://youtube.com/shorts/YIMjRVUX8-c" },
  { id: "N4v4nfJJxuM", title: "Спасибо, Пап! | Эмоциональный интеллект", url: "https://youtube.com/shorts/N4v4nfJJxuM" },
  { id: "qRM81jhHM1o", title: "Спасибо, Пап! | Доверие в семье", url: "https://youtube.com/shorts/qRM81jhHM1o" },
  { id: "Tt60eLLAEDU", title: "Спасибо, Пап! | Границы и правила", url: "https://youtube.com/shorts/Tt60eLLAEDU" },
  { id: "5ynIDqjlhjI", title: "Спасибо, Пап! | Мотивация детей", url: "https://youtube.com/shorts/5ynIDqjlhjI" },
  { id: "4uf1roD5-Pw", title: "Спасибо, Пап! | Самостоятельность", url: "https://youtube.com/shorts/4uf1roD5-Pw" },
  { id: "WGx2OFTr-mE", title: "Спасибо, Пап! | Ответственность", url: "https://youtube.com/shorts/WGx2OFTr-mE" }
];

export function SpasiboPapShortsProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Спасибо, Пап! Shorts</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "Спасибо, Пап!" включал комплексную работу с Shorts, направленную на максимальное удержание внимания аудитории и повышение охватов контента. 
            В рамках сервиса была выполнена самостоятельная нарезка наиболее ярких моментов из исходного материала и их адаптация в формат коротких видео, 
            что освободило заказчика от необходимости выбора фрагментов для шортс. Дополнительно осуществлялся монтаж полноформатных подкастов, 
            которые представлены в разделе горизонтальных видео портфолио.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spasiboPapShortsVideos.map((video) => (
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