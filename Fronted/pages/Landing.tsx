import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, ShieldCheck, Users } from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';

export const Landing = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">La forma más inteligente de</span>{' '}
                                    <span className="block text-primary-500 xl:inline">cambiar lo que tienes</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    TruequePlus es una comunidad para intercambiar productos de forma segura, ahorrar dinero y promover la sostenibilidad.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link to="/explore" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10">
                                            Explorar Trueques
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link to="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10">
                                            Unirse Ahora
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://picsum.photos/id/445/1600/1200" alt="People trading" />
                </div>
            </section>

            {/* Recent Swaps Preview */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-gray-900">Últimos Productos</h2>
                        <p className="mt-4 text-lg text-gray-500">Descubre lo que la comunidad está ofreciendo hoy.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MOCK_PRODUCTS.slice(0, 4).map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
                                <div className="aspect-video w-full overflow-hidden">
                                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 truncate">{product.title}</h3>
                                    <p className="text-sm text-primary-600 mt-1">Busca: {product.lookingFor || "Algo interesante"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link to="/explore" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                            Ver todo el mercado <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

             {/* Features */}
             <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                                <RefreshCw size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sostenible</h3>
                            <p className="text-gray-500">Dale una segunda vida a tus objetos y reduce el consumo innecesario.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Seguro</h3>
                            <p className="text-gray-500">Sistema de reputación y verificación para intercambios confiables.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Comunidad</h3>
                            <p className="text-gray-500">Conecta con personas que comparten tus mismos intereses.</p>
                        </div>
                    </div>
                </div>
             </section>
        </div>
    );
};