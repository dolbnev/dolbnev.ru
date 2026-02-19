import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <>
      <section id="contact" className="py-12 sm:py-20 bg-black text-white px-4 w-full overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-druk text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 tracking-tight">Свяжитесь с Нами</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12">Готовы обсудить ваш проект? Мы всегда на связи!</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12">
            <a href="tel:+79602332260" className="flex items-center font-druk font-bold tracking-tight text-sm sm:text-base">
              <Phone className="w-6 h-6 mr-2" />
              +7 960 233-22-60
            </a>
            <a href="mailto:i@ndolbnev.ru" className="flex items-center font-druk font-bold tracking-tight text-sm sm:text-base">
              <Mail className="w-6 h-6 mr-2" />
              i@ndolbnev.ru
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base">© 2024 Dolbnev.ru. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}