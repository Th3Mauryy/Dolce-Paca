
import React, { useState, useRef, useEffect } from 'react';


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Cerrar menú al navegar
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="bg-navy-blue/90 backdrop-blur-sm fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Dolce & <span className="text-neon-violet">Paca</span>
            </h1>
          </div>
          {/* Menú desktop */}
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
          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menú">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Menú móvil desplegable */}
            <div 
              ref={menuRef} 
              className={`absolute right-4 top-16 bg-navy-blue rounded-xl shadow-xl py-4 px-8 flex flex-col space-y-4 z-50 transition-all duration-300 ease-in-out transform origin-top-right ${
                menuOpen 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              <a href="#inicio" onClick={handleNavClick} className="text-white hover:text-neon-violet transition-colors duration-300 text-lg">
                Inicio
              </a>
              <a href="#catalogo" onClick={handleNavClick} className="text-white hover:text-neon-violet transition-colors duration-300 text-lg">
                Catálogo
              </a>
              <a href="#contacto" onClick={handleNavClick} className="text-white hover:text-neon-violet transition-colors duration-300 text-lg">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
