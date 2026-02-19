import React from 'react';

const boomerangMeShortsVideos = [
  { id: "5lfCRGD48xc", title: "BoomerangMe - Программа лояльности для бизнеса", url: "https://youtube.com/shorts/5lfCRGD48xc" },
  { id: "y7L5ixm9zmY", title: "BoomerangMe - Увеличение продаж через лояльность", url: "https://youtube.com/shorts/y7L5ixm9zmY" },
  { id: "_-rxV4EzpL4", title: "BoomerangMe - Цифровые карты лояльности", url: "https://youtube.com/shorts/_-rxV4EzpL4" },
  { id: "fxrSrIBpVwE", title: "BoomerangMe - Автоматизация маркетинга", url: "https://youtube.com/shorts/fxrSrIBpVwE" },
  { id: "l-WZPitHBCc", title: "BoomerangMe - Персонализация предложений", url: "https://youtube.com/shorts/l-WZPitHBCc" },
  { id: "91NJ8hMUFFA", title: "BoomerangMe - Аналитика клиентов", url: "https://youtube.com/shorts/91NJ8hMUFFA" },
  { id: "tY2MUDfAuZM", title: "BoomerangMe - Мобильное приложение", url: "https://youtube.com/shorts/tY2MUDfAuZM" },
  { id: "hOsxtFOAwlM", title: "BoomerangMe - Интеграция с кассами", url: "https://youtube.com/shorts/hOsxtFOAwlM" },
  { id: "FvnjG3qEZUs", title: "BoomerangMe - SMS уведомления", url: "https://youtube.com/shorts/FvnjG3qEZUs" },
  { id: "e-42Dochk5k", title: "BoomerangMe - Push уведомления", url: "https://youtube.com/shorts/e-42Dochk5k" },
  { id: "TtdkYz_2XC8", title: "BoomerangMe - Геймификация", url: "https://youtube.com/shorts/TtdkYz_2XC8" },
  { id: "HuDTPA5CnxY", title: "BoomerangMe - Реферальная программа", url: "https://youtube.com/shorts/HuDTPA5CnxY" },
  { id: "Seafu-e4abs", title: "BoomerangMe - Сегментация клиентов", url: "https://youtube.com/shorts/Seafu-e4abs" },
  { id: "yEUrQfRVNSg", title: "BoomerangMe - Управление акциями", url: "https://youtube.com/shorts/yEUrQfRVNSg" },
  { id: "J-R_Gzl2D8o", title: "BoomerangMe - Многоуровневая программа", url: "https://youtube.com/shorts/J-R_Gzl2D8o" },
  { id: "lvFaDbsMgys", title: "BoomerangMe - Социальные сети", url: "https://youtube.com/shorts/lvFaDbsMgys" },
  { id: "sEWc0GVbnHI", title: "BoomerangMe - Отчеты и статистика", url: "https://youtube.com/shorts/sEWc0GVbnHI" },
  { id: "t2mvGTGEc1M", title: "BoomerangMe - Настройка программы", url: "https://youtube.com/shorts/t2mvGTGEc1M" },
  { id: "I3LDiFQziL8", title: "BoomerangMe - Бонусные баллы", url: "https://youtube.com/shorts/I3LDiFQziL8" },
  { id: "B7UW3V2RLfI", title: "BoomerangMe - Скидки и акции", url: "https://youtube.com/shorts/B7UW3V2RLfI" },
  { id: "mh9h0jrTqqI", title: "BoomerangMe - Клиентская база", url: "https://youtube.com/shorts/mh9h0jrTqqI" },
  { id: "yDN-6gVt-XE", title: "BoomerangMe - Повышение лояльности", url: "https://youtube.com/shorts/yDN-6gVt-XE" },
  { id: "ThZ8vs1MJDA", title: "BoomerangMe - Удержание клиентов", url: "https://youtube.com/shorts/ThZ8vs1MJDA" },
  { id: "_tKcYyBDthw", title: "BoomerangMe - Увеличение чека", url: "https://youtube.com/shorts/_tKcYyBDthw" },
  { id: "0uEBo1-d-A4", title: "BoomerangMe - Частота покупок", url: "https://youtube.com/shorts/0uEBo1-d-A4" },
  { id: "uG5rTlTx1_U", title: "BoomerangMe - Возврат клиентов", url: "https://youtube.com/shorts/uG5rTlTx1_U" },
  { id: "vZB63bTtdhs", title: "BoomerangMe - Персональные предложения", url: "https://youtube.com/shorts/vZB63bTtdhs" },
  { id: "5QHltNH_vr4", title: "BoomerangMe - Таргетированная реклама", url: "https://youtube.com/shorts/5QHltNH_vr4" },
  { id: "s0ifkpEMjEg", title: "BoomerangMe - Email маркетинг", url: "https://youtube.com/shorts/s0ifkpEMjEg" },
  { id: "WlQIbxA23wE", title: "BoomerangMe - Автоматические рассылки", url: "https://youtube.com/shorts/WlQIbxA23wE" },
  { id: "h-UKvQwwSXE", title: "BoomerangMe - Триггерные сообщения", url: "https://youtube.com/shorts/h-UKvQwwSXE" },
  { id: "S0CM9a-3usQ", title: "BoomerangMe - Поведенческий анализ", url: "https://youtube.com/shorts/S0CM9a-3usQ" },
  { id: "-BnFER11X9o", title: "BoomerangMe - Прогнозирование покупок", url: "https://youtube.com/shorts/-BnFER11X9o" },
  { id: "HRrna8SDE-M", title: "BoomerangMe - Машинное обучение", url: "https://youtube.com/shorts/HRrna8SDE-M" },
  { id: "zNbu3oAyxOA", title: "BoomerangMe - Искусственный интеллект", url: "https://youtube.com/shorts/zNbu3oAyxOA" },
  { id: "_kIqIeRazg4", title: "BoomerangMe - Предиктивная аналитика", url: "https://youtube.com/shorts/_kIqIeRazg4" },
  { id: "aqEzXtvnpR8", title: "BoomerangMe - Сценарии лояльности", url: "https://youtube.com/shorts/aqEzXtvnpR8" },
  { id: "99cmxcrIGVw", title: "BoomerangMe - Воронка продаж", url: "https://youtube.com/shorts/99cmxcrIGVw" },
  { id: "PtnZWKsKti0", title: "BoomerangMe - Конверсия клиентов", url: "https://youtube.com/shorts/PtnZWKsKti0" },
  { id: "ufopjALSxGU", title: "BoomerangMe - Жизненный цикл клиента", url: "https://youtube.com/shorts/ufopjALSxGU" },
  { id: "RIqE3RHHBTg", title: "BoomerangMe - Ценность клиента", url: "https://youtube.com/shorts/RIqE3RHHBTg" },
  { id: "LY5riL9Ahfc", title: "BoomerangMe - Сегментация по поведению", url: "https://youtube.com/shorts/LY5riL9Ahfc" },
  { id: "4CWHBcOV4UY", title: "BoomerangMe - Персонализация опыта", url: "https://youtube.com/shorts/4CWHBcOV4UY" },
  { id: "OMJxtzBVHY8", title: "BoomerangMe - Омниканальность", url: "https://youtube.com/shorts/OMJxtzBVHY8" },
  { id: "6VLotkaN5Rc", title: "BoomerangMe - Интеграция каналов", url: "https://youtube.com/shorts/6VLotkaN5Rc" },
  { id: "as7uGOwA_uM", title: "BoomerangMe - Единая экосистема", url: "https://youtube.com/shorts/as7uGOwA_uM" },
  { id: "gKlKdgenpGc", title: "BoomerangMe - Синхронизация данных", url: "https://youtube.com/shorts/gKlKdgenpGc" },
  { id: "TGLY0PGtS7g", title: "BoomerangMe - Облачные технологии", url: "https://youtube.com/shorts/TGLY0PGtS7g" },
  { id: "CzfOxZmdwMw", title: "BoomerangMe - Безопасность данных", url: "https://youtube.com/shorts/CzfOxZmdwMw" },
  { id: "AeRXUSRdwhg", title: "BoomerangMe - Защита информации", url: "https://youtube.com/shorts/AeRXUSRdwhg" },
  { id: "xwW5V8lIyt4", title: "BoomerangMe - Соответствие GDPR", url: "https://youtube.com/shorts/xwW5V8lIyt4" },
  { id: "CGeLga84KXU", title: "BoomerangMe - Конфиденциальность", url: "https://youtube.com/shorts/CGeLga84KXU" },
  { id: "6qwSMd85G0c", title: "BoomerangMe - Согласие на обработку", url: "https://youtube.com/shorts/6qwSMd85G0c" },
  { id: "JhHlQqgUXTM", title: "BoomerangMe - Права пользователей", url: "https://youtube.com/shorts/JhHlQqgUXTM" },
  { id: "N23JHGB4zcs", title: "BoomerangMe - Прозрачность данных", url: "https://youtube.com/shorts/N23JHGB4zcs" },
  { id: "TVsuXzL07j4", title: "BoomerangMe - Этичный маркетинг", url: "https://youtube.com/shorts/TVsuXzL07j4" },
  { id: "tXsFNEoh9Hs", title: "BoomerangMe - Ответственный бизнес", url: "https://youtube.com/shorts/tXsFNEoh9Hs" },
  { id: "wie5V1pNwoM", title: "BoomerangMe - Устойчивое развитие", url: "https://youtube.com/shorts/wie5V1pNwoM" },
  { id: "isV1sMi-zjE", title: "BoomerangMe - Социальная ответственность", url: "https://youtube.com/shorts/isV1sMi-zjE" },
  { id: "Z2Vr0uD6mMU", title: "BoomerangMe - Экологичность", url: "https://youtube.com/shorts/Z2Vr0uD6mMU" },
  { id: "drswgfJ-BNM", title: "BoomerangMe - Цифровая трансформация", url: "https://youtube.com/shorts/drswgfJ-BNM" },
  { id: "n1HozLbt-i8", title: "BoomerangMe - Инновации в ритейле", url: "https://youtube.com/shorts/n1HozLbt-i8" },
  { id: "B8SvupkjjMs", title: "BoomerangMe - Будущее торговли", url: "https://youtube.com/shorts/B8SvupkjjMs" },
  { id: "fJFJtsZml9I", title: "BoomerangMe - Технологии завтрашнего дня", url: "https://youtube.com/shorts/fJFJtsZml9I" },
  { id: "KhEs09bwyag", title: "BoomerangMe - Эволюция лояльности", url: "https://youtube.com/shorts/KhEs09bwyag" },
  { id: "TkK-4fTMSYE", title: "BoomerangMe - Революция в маркетинге", url: "https://youtube.com/shorts/TkK-4fTMSYE" },
  { id: "LLJtIVmB0hQ", title: "BoomerangMe - Новая эра ритейла", url: "https://youtube.com/shorts/LLJtIVmB0hQ" },
  { id: "AkVZ9-iKY1s", title: "BoomerangMe - Трансформация бизнеса", url: "https://youtube.com/shorts/AkVZ9-iKY1s" },
  { id: "BYjFNv22oGE", title: "BoomerangMe - Цифровое будущее", url: "https://youtube.com/shorts/BYjFNv22oGE" },
  { id: "LPLJ4NH9ZpQ", title: "BoomerangMe - Инновационные решения", url: "https://youtube.com/shorts/LPLJ4NH9ZpQ" },
  { id: "8JLGdeCPfF4", title: "BoomerangMe - Прорывные технологии", url: "https://youtube.com/shorts/8JLGdeCPfF4" },
  { id: "_4-EUyZxAaI", title: "BoomerangMe - Передовые методы", url: "https://youtube.com/shorts/_4-EUyZxAaI" },
  { id: "QWVHu00J3mY", title: "BoomerangMe - Современные подходы", url: "https://youtube.com/shorts/QWVHu00J3mY" },
  { id: "Xn4AxBxlFNg", title: "BoomerangMe - Актуальные тренды", url: "https://youtube.com/shorts/Xn4AxBxlFNg" },
  { id: "S09HuvB_6M8", title: "BoomerangMe - Глобальные изменения", url: "https://youtube.com/shorts/S09HuvB_6M8" },
  { id: "K-Xq6QjaYIg", title: "BoomerangMe - Мировые стандарты", url: "https://youtube.com/shorts/K-Xq6QjaYIg" },
  { id: "uiz7p094fbg", title: "BoomerangMe - Международный опыт", url: "https://youtube.com/shorts/uiz7p094fbg" },
  { id: "KIKOTKBoPD0", title: "BoomerangMe - Лучшие практики", url: "https://youtube.com/shorts/KIKOTKBoPD0" }
];

export function BoomerangMeShortsProject() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-4xl font-bold mb-6">BoomerangMe Shorts</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Проект "BoomerangMe Cards" был направлен на создание динамичного визуала для максимального охвата аудитории. 
            В рамках работы выполнялся монтаж как Shorts, так и длинных YouTube видео, требующих особого подхода к структуре 
            и удержанию внимания зрителей. Примеры работы с длинными видео представлены в разделе портфолио "длинные видео".
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boomerangMeShortsVideos.map((video) => (
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