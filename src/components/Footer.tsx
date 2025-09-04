import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-dark-navy py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dolce & <span className="text-neon-violet">Paca</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Tu tienda de confianza para encontrar la moda más exclusiva y elegante. 
              Calidad y estilo en cada prenda.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-neon-violet transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-gray-300 hover:text-neon-violet transition-colors duration-300">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-neon-violet transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/523131199660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-gray-300 hover:text-neon-violet transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>+52 313 119 9660</span>
              </a>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Armeria, Colima</span>
              </div>
            </div>
          </div>

          {/* Mapa y Dirección */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Nuestra Ubicación</h4>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm leading-relaxed">
                <p>19 Dr. Miguel Galindo</p>
                <p>Ciudad de Armería, Colima</p>
              </div>
              
              {/* Mini Mapa */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8228975089394!2d-103.96282842393886!3d19.108567050866756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c2c5c3a1e9b45%3A0x8b9e4f3e8e5c1234!2s19%20Dr.%20Miguel%20Galindo%2C%20Centro%2C%2028300%20Armer%C3%ADa%2C%20Col.!5e0!3m2!1ses!2smx!4v1693858800000!5m2!1ses!2smx"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Dolce & Paca - 19 Dr. Miguel Galindo, Armería, Colima"
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
              
              <a
                href="https://maps.app.goo.gl/ootaPXEzTxjPAuAS7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-neon-violet hover:text-light-violet transition-colors duration-300 text-sm font-medium"
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dolce & Paca. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-neon-violet transition-colors duration-300">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-violet transition-colors duration-300">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
