import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../services/mockData';
import { Search, Filter } from 'lucide-react';

const CATEGORIES = ['Todas', 'Electrónica', 'Hogar', 'Ropa', 'Instrumentos', 'Deportes', 'Libros'];

export const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const filteredProducts = MOCK_PRODUCTS.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              product.lookingFor?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-3xl font-black text-gray-900">Explora Todos los Trueques</h1>
                <p className="text-gray-500">Encuentra artículos increíbles para intercambiar.</p>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm shadow-sm"
                        placeholder="Buscar producto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                     {CATEGORIES.map(cat => (
                         <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                selectedCategory === cat 
                                ? 'bg-primary-500 text-white shadow-md' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}
                         >
                             {cat}
                         </button>
                     ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-1 rounded-full">{product.category}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight line-clamp-2">{product.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                            
                            <div className="mt-auto">
                                <div className="flex items-center gap-2 mb-3">
                                    <img src={product.ownerAvatar} alt={product.ownerName} className="w-6 h-6 rounded-full" />
                                    <span className="text-xs text-gray-500">{product.ownerName}</span>
                                </div>
                                <button className="w-full bg-primary-500 text-white font-bold py-2 rounded-lg text-sm hover:bg-primary-600 transition-colors">
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
                    <button 
                        onClick={() => {setSearchTerm(''); setSelectedCategory('Todas');}}
                        className="mt-4 text-primary-600 font-medium hover:underline"
                    >
                        Limpiar filtros
                    </button>
                </div>
            )}
            
            {/* Pagination Placeholder */}
            <div className="flex justify-center mt-12 gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500" disabled>1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary-500 bg-primary-500 text-white">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500">3</button>
            </div>
        </div>
    );
};