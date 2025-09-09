import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  images: {
    product: string;
    model: string;
  };
  description: string;
}

// Datos de ejemplo - en un proyecto real estos vendrían de una API
const products: Product[] = [
  {
    id: 1,
    name: "Camisa Clásica roja",
    price: "$80.00",
    category: "Camisas",
    images: {
      product: "/img/camisas/Camisa_roja.jpeg",
      model: "/img/camisas/Camisa_roja_modelo.jpeg"
    },
    description: "Camisa clásica roja perfecta para el trabajo."
  },
  {
    id: 2,
    name: "Camisa Polo blanca",
    price: "$70.00",
    category: "Camisas",
    images: {
      product: "/img/camisas/camisa_polo_blanca.jpeg",
      model: "/img/camisas/camisa_polo_blanca_modelo.jpeg"
    },
    description: "Camisa polo para el fin de semana."
  },
  {
    id: 3,
    name: "Camisa Unisex",
    price: "$70.00",
    category: "Camisas",
    images: {
      product: "/img/camisas/camisa_unisex.jpeg",
      model: "/img/camisas/camisa_unisex_modelo.jpeg"
    },
    description: "Camisa para cualquier persona."
  },
  {
    id: 4,
    name: "Pantalón Azul",
    price: "$100.00",
    category: "Pantalones",
    images: {
      product: "/img/pantalones/pantalon_azul.jpeg",
      model: "/img/pantalones/pantalon_Azul_modelo.jpeg"
    },
    description: "Pantalón azul para salir."
  },
  {
    id: 5,
    name: "Pantalón Hueso",
    price: "$100.00",
    category: "Pantalones",
    images: {
      product: "/img/pantalones/pantalon_hueso.jpeg",
      model: "/img/pantalones/pantalon_hueso_modelo.jpeg"
    },
    description: "Jean hueso elegante para vestir."
  },
  {
    id: 6,
    name: "Pantalón verde",
    price: "$100.00",
    category: "Pantalones",
    images: {
     product: "/img/pantalones/verde.jpeg",
      model: "/img/pantalones/verde_modelo.jpeg"
    },
    description: "Pantalón verde para salir."
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [product.images.product, product.images.model];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative h-80 overflow-hidden bg-white rounded-t-2xl">
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 bg-white"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-neon-violet' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <span className="text-neon-violet text-sm font-medium">{product.category}</span>
        <h3 className="text-xl font-semibold text-white mt-1 mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-neon-violet">{product.price}</span>
          <a
            href={`https://wa.me/523131199660?text=Hola, estoy interesado en el ${product.name} por ${product.price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-violet hover:bg-light-violet text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="catalogo" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-neon-violet">Catálogo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explora nuestra exclusiva colección de prendas diseñadas para cada ocasión
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-neon-violet text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-xl">No hay productos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
