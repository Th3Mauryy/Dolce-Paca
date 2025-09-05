import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Moda que Define tu
            <span className="block text-neon-violet">Personalidad</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Descubre nuestra exclusiva colección de ropa diseñada para realzar tu estilo único
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#catalogo" 
              className="bg-neon-violet hover:bg-light-violet text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Catálogo
            </a>
            <a 
              href="https://wa.me/523131199660" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
