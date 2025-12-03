import React from 'react';
import { useAuth } from '../context/AuthContext';
import { MOCK_PRODUCTS } from '../services/mockData';
import { PlusCircle, Package, RefreshCw, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Ene', trueques: 2 },
  { name: 'Feb', trueques: 4 },
  { name: 'Mar', trueques: 1 },
  { name: 'Abr', trueques: 5 },
  { name: 'May', trueques: 3 },
];

export const Dashboard = () => {
    const { user } = useAuth();
    const myProducts = MOCK_PRODUCTS.filter(p => p.ownerId === 'u1');

    return (
        <div className="flex h-full">
            {/* Sidebar (simplified for Layout context) */}
            <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-gray-200 p-4">
                <div className="space-y-2">
                     <div className="flex items-center gap-3 p-3 bg-primary-50 text-primary-700 rounded-lg">
                        <Package size={20} />
                        <span className="font-medium">Dashboard</span>
                    </div>
                    <Link to="/profile" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <RefreshCw size={20} />
                        <span className="font-medium">Mis Trueques</span>
                    </Link>
                    <Link to="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <MessageSquare size={20} />
                        <span className="font-medium">Mensajes</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-gray-900">Mi Panel</h1>
                    <Link to="/create" className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-primary-600 transition-colors">
                        <PlusCircle size={20} /> Publicar Producto
                    </Link>
                </div>

                {/* Profile Summary */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8 flex flex-col md:flex-row items-center gap-6">
                    <img src={user?.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-primary-100 object-cover" />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                        <p className="text-gray-500">Gestiona tus productos y trueques desde aquí.</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="text-gray-500 text-sm font-medium uppercase">Productos Activos</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{myProducts.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="text-gray-500 text-sm font-medium uppercase">Trueques Completados</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 md:col-span-2 lg:col-span-1">
                        <h3 className="text-gray-500 text-sm font-medium uppercase mb-4">Actividad Reciente</h3>
                        <div className="h-24">
                             <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" hide />
                                    <Tooltip />
                                    <Bar dataKey="trueques" fill="#13ec92" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">Tus Productos en TruequePlus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {myProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                            <div className="relative aspect-video">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                                <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Disponible</span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-gray-900 truncate">{product.title}</h3>
                                <div className="flex justify-end gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                     <button className="text-gray-500 hover:text-primary-600 text-sm font-medium">Editar</button>
                                     <button className="text-gray-500 hover:text-red-600 text-sm font-medium">Borrar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Empty State / Add New Placeholder */}
                    <Link to="/create" className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 text-gray-400 hover:text-primary-500 hover:border-primary-500 transition-colors min-h-[200px]">
                        <PlusCircle size={48} className="mb-2 opacity-50" />
                        <span className="font-medium">Publicar nuevo</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};