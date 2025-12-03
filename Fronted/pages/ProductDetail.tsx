import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../services/mockData';
import { ArrowLeft, RefreshCw, Calendar, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = MOCK_PRODUCTS.find(p => p.id === id);
    const { isAuthenticated } = useAuth();
    const [selectedImage, setSelectedImage] = React.useState(product?.image);

    if (!product) {
        return <div className="p-8 text-center">Producto no encontrado</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6">
                 <Link to="/explore" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600">
                    <ArrowLeft size={16} className="mr-1" /> Volver a Explorar
                 </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Images */}
                <div className="space-y-4">
                    <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                        <img src={selectedImage || product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>
                    {product.gallery && (
                        <div className="grid grid-cols-4 gap-4">
                             <button onClick={() => setSelectedImage(product.image)} className={`rounded-lg overflow-hidden border-2 ${selectedImage === product.image ? 'border-primary-500' : 'border-transparent'}`}>
                                <img src={product.image} className="w-full h-full object-cover aspect-square" alt="Main" />
                            </button>
                            {product.gallery.map((img, idx) => (
                                <button key={idx} onClick={() => setSelectedImage(img)} className={`rounded-lg overflow-hidden border-2 ${selectedImage === img ? 'border-primary-500' : 'border-transparent'}`}>
                                    <img src={img} className="w-full h-full object-cover aspect-square" alt={`Gallery ${idx}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                         <span className="bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{product.category}</span>
                         <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{product.condition}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 leading-tight">{product.title}</h1>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                        <Calendar size={14} /> 
                        <span>Publicado el {product.postedDate}</span>
                    </div>

                    <div className="prose prose-green mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Descripción</h3>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>
                    
                    {product.lookingFor && (
                        <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 mb-8">
                            <h3 className="text-primary-900 font-bold mb-1">Busco a cambio:</h3>
                            <p className="text-primary-700">{product.lookingFor}</p>
                        </div>
                    )}

                    <div className="mt-auto border-t border-gray-100 pt-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <img src={product.ownerAvatar} alt={product.ownerName} className="w-12 h-12 rounded-full border border-gray-200" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{product.ownerName}</p>
                                    <p className="text-xs text-gray-500">Miembro desde 2022</p>
                                </div>
                            </div>
                            <Link to="#" className="text-primary-600 text-sm font-semibold hover:underline">Ver perfil</Link>
                        </div>

                        {isAuthenticated ? (
                            <button className="w-full bg-primary-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2">
                                <RefreshCw /> Proponer Trueque
                            </button>
                        ) : (
                            <Link to="/login" className="w-full block text-center bg-gray-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-gray-800 transition-colors">
                                Inicia sesión para intercambiar
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};