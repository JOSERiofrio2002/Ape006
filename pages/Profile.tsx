import React from 'react';
import { useAuth } from '../context/AuthContext';
import { MOCK_TRADES } from '../services/mockData';
import { RefreshCw, CheckCircle, Clock, XCircle } from 'lucide-react';

export const Profile = () => {
    const { user } = useAuth();
    
    // In a real app, verify user existence
    if (!user) return null;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-black text-gray-900 mb-8">Mi Perfil</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: User Card */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                        <div className="relative inline-block">
                             <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-primary-50 mx-auto object-cover" />
                             <button className="absolute bottom-0 right-0 bg-primary-500 text-white p-2 rounded-full border-2 border-white hover:bg-primary-600">
                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                             </button>
                        </div>
                        <h2 className="mt-4 text-xl font-bold text-gray-900">{user.name}</h2>
                        <p className="text-primary-600 text-sm">{user.email}</p>
                        <p className="mt-4 text-gray-500 text-sm leading-relaxed">{user.bio}</p>
                        
                        <div className="mt-6 flex flex-col gap-2">
                             <button className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Editar Perfil</button>
                             <button className="w-full bg-primary-500 text-white rounded-lg py-2 text-sm font-bold hover:bg-primary-600">Cambiar Contraseña</button>
                        </div>
                    </div>
                </div>

                {/* Right: History */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Historial de Trueques</h3>
                        </div>
                        
                        {/* Tabs (Simulated) */}
                        <div className="flex border-b border-gray-200">
                            <button className="px-6 py-3 text-sm font-bold text-primary-600 border-b-2 border-primary-500">Todos</button>
                            <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Completados</button>
                            <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Pendientes</button>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {MOCK_TRADES.map(trade => (
                                <div key={trade.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        {/* Icons / Visuals of swap */}
                                        <div className="flex items-center gap-2">
                                            <img src={trade.offeredItem.image} className="w-16 h-16 rounded-lg object-cover bg-gray-100" alt="Offered" />
                                            <RefreshCw className="text-gray-400" />
                                            <img src={trade.requestedItem.image} className="w-16 h-16 rounded-lg object-cover bg-gray-100" alt="Requested" />
                                        </div>

                                        <div className="flex-1 text-center sm:text-left">
                                            <p className="font-bold text-gray-900 text-sm">
                                                {trade.offeredItem.title} <span className="font-normal text-gray-500">por</span> {trade.requestedItem.title}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                con <span className="font-semibold text-gray-700">{trade.partnerName}</span> • {trade.date}
                                            </p>
                                        </div>

                                        <div>
                                            {trade.status === 'Completado' && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    <CheckCircle size={14} className="mr-1" /> Completado
                                                </span>
                                            )}
                                            {trade.status === 'Pendiente' && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    <Clock size={14} className="mr-1" /> Pendiente
                                                </span>
                                            )}
                                            {trade.status === 'Cancelado' && (
                                                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    <XCircle size={14} className="mr-1" /> Cancelado
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};