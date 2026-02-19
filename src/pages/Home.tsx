import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, Star } from 'lucide-react';

export function Home() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { step: 1, delay: 500 },   // Main title appears
      { step: 2, delay: 3500 },  // Title fades
      { step: 3, delay: 4000 },  // Subtitle and button appear
    ];

    sequence.forEach(({ step, delay }) => {
      setTimeout(() => setAnimationStep(step), delay);
    });
  }, []);

  return (
    <>
      {/* Cinematic Hero Section */}
      <header className="relative min-h-screen bg-black overflow-hidden w-full">
        {/* Main Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence>
            {animationStep >= 1 && animationStep < 2 && (
              <motion.h1
                className="font-druk text-2xl sm:text-4xl md:text-6xl font-semibold text-white text-center px-4 sm:px-8 tracking-tight max-w-full"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)',
                }}
                initial={{ 
                  opacity: 0,
                  scale: 0.3,
                  y: -100,
                }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)"
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: -30,
                  filter: "blur(5px)"
                }}
                transition={{ 
                  duration: 1.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Профессиональный<br />
                видеоконтент для вашего<br />
                бизнеса
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle and Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence>
            {animationStep >= 3 && (
              <motion.div
                className="text-center px-4 max-w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                {/* Subtitle */}
                <motion.p
                  className="font-druk text-xl sm:text-2xl md:text-3xl text-white mb-6 sm:mb-12 font-bold tracking-tight max-w-full leading-tight"
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)',
                  }}
                  initial={{ 
                    opacity: 0,
                    y: 30,
                    filter: "blur(5px)"
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 1.2,
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <span className="sm:hidden">
                    Превращаем сырые идеи<br />
                    в захватывающие видео
                  </span>
                  <span className="hidden sm:inline">
                    Превращаем сырые идеи в захватывающие видео
                  </span>
                </motion.p>

                {/* CTA Button with flickering effect */}
                <motion.div
                  className="mt-2 sm:mt-0"
                  initial={{ 
                    opacity: 0,
                    y: 40,
                    scale: 0.9
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 1,
                    delay: 0.8,
                    ease: "easeOut"
                  }}
                >
                  <Link to="/portfolio">
                    <motion.button 
                      className="font-druk relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 tracking-tight shadow-2xl border border-red-400/30"
                      style={{
                        boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 40px rgba(239, 68, 68, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(239, 68, 68, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                          '0 0 40px rgba(239, 68, 68, 0.6), inset 0 0 25px rgba(255, 255, 255, 0.15)',
                          '0 0 30px rgba(239, 68, 68, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Смотреть портфолио
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </header>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-12 sm:py-20 px-4 w-full overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="font-druk text-2xl sm:text-4xl font-semibold text-center mb-8 sm:mb-16 tracking-wide"
          >
            Наши Услуги
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Star, title: "Рекламные ролики", text: "Создание эффективных рекламных видео для продвижения вашего бренда" },
              { icon: Users, title: "Корпоративное видео", text: "Презентационные и обучающие видео для вашей компании" },
              { icon: Award, title: "Событийная съёмка", text: "Профессиональная съёмка мероприятий любой сложности" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="font-druk text-lg sm:text-xl font-semibold mb-4 tracking-wide">{service.title}</h3>
                <p className="font-druk text-gray-600 text-sm sm:text-base font-normal">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section 
        className="py-12 sm:py-20 px-4 w-full overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="font-druk text-2xl sm:text-4xl font-semibold text-center mb-8 sm:mb-16 tracking-wide"
          >
            Почему Мы?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Star, title: "Опыт", text: "10+ лет в индустрии" },
              { icon: Award, title: "Оборудование", text: "Профессиональная техника" },
              { icon: Users, title: "Команда", text: "Опытные специалисты" },
              { icon: Star, title: "Качество", text: "Гарантия результата" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="font-druk text-lg sm:text-xl font-semibold mb-2 tracking-wide">{item.title}</h3>
                <p className="font-druk text-gray-600 text-sm sm:text-base font-normal">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}