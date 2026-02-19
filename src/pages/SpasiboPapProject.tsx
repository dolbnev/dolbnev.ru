import React from 'react';

const spasiboPapVideos = [
  { id: "IBVetCymbK4", title: "Что в сумке у папы? | Спасибо, Пап!", url: "https://youtu.be/IBVetCymbK4" },
  { id: "xiSyzjQq6Ao", title: "Подкаст Спасибо, Пап! #1 | О воспитании детей", url: "https://youtu.be/xiSyzjQq6Ao" },
  { id: "Ti4P399c8fI", title: "Подкаст Спасибо, Пап! #2 | Семейные ценности", url: "https://youtu.be/Ti4P399c8fI" },
  { id: "2nmb7mifenk", title: "Подкаст Спасибо, Пап! #3 | Отцовство и карьера", url: "https://youtu.be/2nmb7mifenk" }
];

export function SpasiboPapProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">Спасибо, Пап!</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "Спасибо, Пап!" представил комплексный подход к видеомонтажу, включающий создание подкастов и роликов формата "что в сумке". 
            Выполнен полный цикл постпродакшена: профессиональная обработка звука, цветокоррекция, подбор музыкального сопровождения, 
            наложение графических элементов и текста, а также многокамерный монтаж для подкастового контента. 
            Результат — динамичный и качественный видеоконтент о воспитании детей, готовый для публикации на различных платформах.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {spasiboPapVideos.map((video) => (
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