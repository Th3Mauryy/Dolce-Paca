import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-navy-blue/90 backdrop-blur-sm fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Dolce & <span className="text-neon-violet">Paca</span>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-white hover:text-neon-violet transition-colors duration-300">
              Inicio
            </a>
            <a href="#catalogo" className="text-white hover:text-neon-violet transition-colors duration-300">
              Catálogo
            </a>
            <a href="#contacto" className="text-white hover:text-neon-violet transition-colors duration-300">
              Contacto
            </a>
          </nav>
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
